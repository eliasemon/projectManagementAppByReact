import { action } from "easy-peasy";
/*
ProjectsItemModel = {
    id : "",
    tittle : "",
    description : "",
    projectMangersID : [],
    projectsMembersID : [],
    projectStatus : "Active",
    allTaskIds :[],
    activeTaskListIds : [],
    compleatedTaskListIds : [],
    postPoneTasklistIds : [],
    duration : ""
};*/
/*  MemberItemModel = {
    id : "member||ID-uuidV4||name",
    name : "",
    email : "",
    address : "",
    assignedTasksId : [],
    compleatedTasksId : [],
    unabledToCompletedTaskId : [],
    runningProjectID : [],
    rejectedOrCanceledProjectid : {},
    completedProjectsId : []

}*/
/*
EachTaskModel = {
    id : "",
    tittle : "",
    elements : [],
    status : "active",
                //Todo::
                //Status can be changed by Project Manager. 
    statusSubmitionFromProjectManagerSite : "",
    statusSubmitionFromMemberSite : "",
            //Todo::
            //If Member chage the status ,it will notify project manager
    deadLine : "",
    assignedToMembersIds : [],
    projectId : "",
    subTaskIds : [],
            [One problem is appeared that is := If the parent task's status 
            if compleated ,all of it's sub task's status might be compleated,
            here we need tree traversal by recursive call.] 

}
*/
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
    RunningProjectIds : ["1"],
    PostponeProjectIds : [],
    Tasks : {},
    MemberList: {},
    //Actions
    // membersSection
    addmember : action((state , member)=>{
        state.MemberList[member.id] = member;
    }),
    //Projects Section
    addProject : action((state , projectItem)=>{
        const {RunningProjectIds} = state
        state.Projects[projectItem.id] = projectItem;
        RunningProjectIds.unshift(projectItem.id)
    }),
    postponeProject : action((state , itemkey)=>{
        const {PostponeProjectIds , RunningProjectIds} = state
        state.Projects[itemkey].projectStatus = "postpone"
        PostponeProjectIds.unshift(itemkey)
        state.RunningProjectIds = RunningProjectIds.filter(v => v != itemkey)
        
    }),
    activateProject : action((state , itemkey)=>{
        const {PostponeProjectIds , RunningProjectIds} = state
        state.PostponeProjectIds = PostponeProjectIds.filter(v => v != itemkey)
        RunningProjectIds.unshift(itemkey)
        state.Projects[itemkey].projectStatus = "Active"
    })
    
}

export default model