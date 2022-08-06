import { action } from "easy-peasy";
/*
ProjectsItemModel = {
    id : "",
    tittle : "",
    description : "",
    projectMangersID : "",
    projectStatus : "",
    duration : ""
};*/
/*  MemberItemModel = {
    id : "",
    name : "",
    assignTasksId : [],
    WorkingOnProjectsId : []

}*/
const model = {
    //Store
    Projects : {
        "1" : {
            id : "1",
            tittle : "Web-development",
            description : "Creating full-face Applications",
            projectManager : {
                MemberId : "001",
                Name : ""
            }
        }
    },
    Tasks : {},
    MemberList: {},
    //Actions
    // membersSection
    addmember : action((state , member)=>{
        state.MemberList[member.id] = member;
    }),
    //Projects Section
    addProject : action((state , projectItem)=>{
        state.Projects[projectItem.id] = projectItem;
    }),
    postponeProject : action((state , itemkey)=>{
     state.Projects[itemkey].projectStatus = "postpone"
    })
    
}

export default model