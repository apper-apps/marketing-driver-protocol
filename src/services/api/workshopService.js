import workshopsData from "@/services/mockData/workshops.json"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const workshopService = {
  async getAll() {
    await delay(300)
    return [...workshopsData]
  },

  async getById(id) {
    await delay(200)
    const workshop = workshopsData.find(w => w.Id === parseInt(id))
    if (!workshop) {
      throw new Error("Workshop not found")
    }
    return { ...workshop }
  },

  async create(workshopData) {
    await delay(400)
    const newId = Math.max(...workshopsData.map(w => w.Id)) + 1
    const newWorkshop = {
      Id: newId,
      ...workshopData
    }
    workshopsData.push(newWorkshop)
    return { ...newWorkshop }
  },

  async update(id, updateData) {
    await delay(300)
    const index = workshopsData.findIndex(w => w.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Workshop not found")
    }
    workshopsData[index] = { ...workshopsData[index], ...updateData }
    return { ...workshopsData[index] }
  },

  async delete(id) {
    await delay(250)
    const index = workshopsData.findIndex(w => w.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Workshop not found")
    }
    const deleted = { ...workshopsData[index] }
    workshopsData.splice(index, 1)
    return deleted
  }
}