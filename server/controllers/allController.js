const Services = require('../models/Services');
const Home = require('../models/Home');
const Objects = require('../models/Objects');

class allController {
    async getAll(req, res) {
        try {
            const data = await Services.find().populate('home').populate('objects');

            return res.json({ data: data, message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async create(req, res) {
        try {
            const element = req.body.element;

            const home = new Home ({
                title: element.home
            });

            await home.save();

            const objects = new Objects ({
                title: element.objects
            })

            await objects.save();

            const services = new Services({
                title: element.services,
                home: home._id,
                objects: objects._id
            })

            await services.save();

            const createdServices = await Services.findById(services._id).populate('home objects');
            return res.json({ services: createdServices, message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async update(req, res) {
        try {
            const newElement = req.body.element;
            const id = newElement._id;

            await Home.findByIdAndUpdate(newElement.home._id, newElement.home)
            await Objects.findByIdAndUpdate(newElement.objects._id, newElement.objects)

            await Services.findByIdAndUpdate(id, newElement)

            return res.json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            await Services.findByIdAndDelete(id);
            return res.json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Error" });
        }
    }
}

module.exports = allController