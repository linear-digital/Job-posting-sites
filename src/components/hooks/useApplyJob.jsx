import useCurrentUser from "./useCurrentUser"

const useApplyJob = (job) => {
    const user = useCurrentUser()
    if (user) {
        document.getElementById('my_modal_1').showModal()
    }
    return job
}



export default useApplyJob