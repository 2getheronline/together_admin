import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n'
import axios from 'axios'
import firebase from "firebase/compat/app";
import { platform } from 'os';
Vue.use(Vuex)

const statuses = [{
        id: 0,
        label: "All"
    },
    {
        id: 1,
        label: "Unpublish",
        color: "grey"
    },
    {
        id: 2,
        label: "Active",
        color: "success"
    },
    {
        id: 3,
        label: "Succeeded!",
        color: "primary"
    },
    {
        id: 4,
        label: "Failed",
        color: "error"
    },
];
const baseURL = "/api/";

var config = {
    state: {},
    getters: {
        statuses: () => statuses
    },
    mutations: {
        setMission: (state, currentMission) => {
            state.currentMission = {}
            state.currentMission = currentMission
        }
    },
    actions: {
        loadTranslations({
            commit,
            state
        }, id) {
            return axios.get(baseURL + 'translations').then(res =>
                commit("setLanguages", res.data)

            )
        },
        loadMoreUsers({
            commit,
            state
        }, page) {
            return axios.get(baseURL + 'admin/users?page=' + page).then(res => {
                commit("setUsers", res.data);
                return res
            });
        },
        loadMoreMissions({
            commit,
            state
        }, page) {
            return axios.get(baseURL + 'admin/missions', {
                params: page
            }).then(res => {
                commit("setMissions", res.data);
                return res
            });
        },
        loadMission({
            commit,
            state
        }, id) {
            return axios.get(baseURL + 'admin/missions/' + id).then(res =>
                commit("setCurrentMission", res.data)

            )
        },
        addGroup({
            commit,
            state
        }, group) {
            return axios.post(baseURL + 'admin/groups', group)
                .then(res => this.dispatch("loadGroups"));
        },
        inviteUser({
            commit,
            state
        }, invation) {
            return axios.post(baseURL + 'admin/users', invation)
        },
        blockUser({
            commit,
            state
        }, id) {
            return axios.delete(baseURL + 'admin/users/' + id)
        },
        makeManager({
            commit,
            state
        }, id) {
            return axios.put(baseURL + 'admin/users/' + id, { "type": 2 })
        },
        loadUserById({
            commit,
            state
        }, id) {
            return axios.get(baseURL + 'admin/users/' + id)
        },
        newMission({
            commit,
            state
        }) {
            return axios.post(baseURL + 'admin/missions', state.currentMission)
                .then(res => commit("setMissions", res.data));
        },
        editMission({
            commit,
            state
        }) {
            return axios.put(baseURL + 'admin/missions/' + state.currentMission.id, state.currentMission)
                .then(res => commit("setMissions", res.data));
        },
        publish({
            commit,
            state
        }, mission) {
            mission.status = mission.status == 1 ? 2 : 1
            return axios.put(baseURL + 'admin/missions/' + mission.id, mission)
                .then(res => this.dispatch("loadMissions"));
        },
        getActivties({
            commit,
            state
        }, userId) {
            return axios.get(baseURL + 'admin/activities?user=' + userId);
        },
        fetchMetadata({
            commit,
            state
        }, link) {
            return axios.get(baseURL + 'admin/og-tags?url=' + link);
        },
        fetchGroup({
            commit,
            state
        }, id) {
            return axios.get(baseURL + 'admin/groups/' + id);
        },
        attachToGroup({
            commit,
            state
        }, { id, members }) {
            return axios.put(baseURL + 'admin/groups/' + id, { members: members });
        },
        loadUnattachedMembers({
            commit,
            state
        }) {
            return axios.get(baseURL + 'admin/users/?unattachedMembers=true');
        },
        sendMessage({
            commit,
            state
        }, message) {
            return axios.post(baseURL + 'admin/messages', message)
                .then(res => {
                    commit("setMessages", res.data);
                    return res
                });
        },
        userlogin({
            commit,
            state
        }, user) {
            return user && user.getIdToken()
                .then((idToken) => axios.post(baseURL + 'sessions', {
                    "token": idToken
                }))
                .then(res => {
                    commit("setUser", res.data)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.apiKey

                    store.dispatch('loadTags');
                    store.dispatch('loadPlatforms');
                    store.dispatch('loadGroups');
                    store.dispatch('loadTranslations');
                    store.dispatch('loadActions');

                });

        },
        userlogout({
            commit,
            state
        }) {
            return firebase.auth().signOut()
        },
    },
    modules: {},
};

const toUpperFirst = str => str[0].toUpperCase() + str.substring(1)

const fetchData = (i, model) => ({
    commit,
    state
}) => {
    var url = baseURL + 'admin/' + model
    if (i < 3) {
        url = baseURL + model
    }
    axios.get(url)
        .then(res => commit('set' + toUpperFirst(model), res.data))
}

const models = [
    "actions",
    "tags",
    "platforms",
    "currentMission",
    "missions",
    "overview",
    "users",
    "groups",
    "messages",
    "analytics",
    "user",
    "languages"
];

for (const [i, model] of models.entries()) {
    config.state[model] = {};
    config.getters[model] = eval("(state) => state." + model)
    config.mutations["set" + toUpperFirst(model)] = eval("(state, modelres) => state." + model + " = modelres");
    config.actions["load" + toUpperFirst(model)] = fetchData(i, model)
}




const store = new Vuex.Store(config)




export default store;
