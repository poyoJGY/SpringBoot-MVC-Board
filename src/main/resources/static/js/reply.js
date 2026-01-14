async function get1(bno) {

    const result = await axios.get(`/api/replies/list/${bno}`)

    return result;

}

async function getList({bno, page, size, goLast}) {

    const result = await axios.get(`/api/replies/list/${bno}`, {params: {page, size}})

    if (goLast) {
        const total = result.data.total
        const lastPage = parseInt(Math.ceil(total / size))

        return getList({bno:bno, page:lastPage, seize:size})
    }

    return result.data
}