import types from "./types"
import uuid from 'uuid';

const editFeature = (id, data) => {
    return {type: types.EDIT_FEATURE, data: { id: id, ...data} }
};

const addFeature = data => {
    return {type: types.ADD_FEATURE, data: { id: uuid.v4(), ...data} }
};

const removeFeature = id => {
    return {type: types.REMOVE_FEATURE, data: { id: id } }
};

const thumbUpFeature = id => {
    return {type: types.THUMB_UP_FEATURE, data: { id: id } }
};

const thumbDownFeature = id => {
    return {type: types.THUMB_DOWN_FEATURE, data: { id: id } }
};

export default {
    editFeature, addFeature, removeFeature, thumbUpFeature, thumbDownFeature
}