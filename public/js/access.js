window.onload = async function() {
    const SID = sessionStorage.getItem('SID');
    if(SID){
        const accessUrl = '/access';
        const config = {
            method: 'get',
            headers: {
                authorization: 'Bearer '+SID
            }
        }

        let result = await fetch(accessUrl, config);
        if(!result.status === 200){
            location.href='/login.html';
        }
    
    } else {
        location.href='/login.html';
    }
}