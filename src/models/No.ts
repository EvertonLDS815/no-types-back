import {Schema, model} from 'mongoose';

export const No = model('No', new Schema({
	name: {
        type: String,
        require: true
    },
    nivel: {
        type: String,
		enum: ['Básico', 'Intermediário', 'Avançado'],
        default: 'Básico'
    },
    type: {
        type: String,
    },
    linkImage: {
        type: String,
        require: true
    },
    linkVideo: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
}))
