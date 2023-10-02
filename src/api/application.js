import axios from 'axios'
export const getApplicationInfo=(applyId)=>{
    return axios.get(`http://127.0.0.1/getApplication?applyId=${applyId}`).then(res=>{
        return res
    })
}

export const submitApplication=applyInfo=>{
    const{
        programmeId,
        userId,
        passportNo,
        passportName,
        gender,
        country,
        birth,
        passType,
        finNo,
        passExpire,
        address,
        postalCode,
        qualificationCompleteYear,

        academicInstitutionName,
        academicQualificationName,
        companyName,
        companyIndustry,
        sponsorType,
        infoSource,
    }=applyInfo;
    return axios.post(`http://127.0.0.1:8080/programme/apply?programmeId=${programmeId}`,{
        userId,
        passportNo,
        passportName,
        gender,
        country,
        birth,
        passType,
        finNo,
        passExpire,
        address,
        postalCode,
        qualificationCompleteYear,

        academicInstitutionName,
        academicQualificationName,
        companyName,
        companyIndustry,
        sponsorType,
        infoSource,
    })
}

export const getForm=(userId)=>{
    return axios.get(`http://127.0.0.1:8080/programme/form?userId=${userId}`)
}
export const getMyApplications=(userId)=>{
    return axios.get(`http://127.0.0.1:8080/programme/application/${userId}`)
}
