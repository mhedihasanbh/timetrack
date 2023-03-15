import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProjectOne from '../views/ProjectOne.vue'
import ProjectTwo from '../views/ProjectTwo.vue'
import ActivitySummary from '../views/ActivitySummary.vue'
import Attendance from '../views/Attendance.vue'
import HoursTrack from '../views/HoursTrack.vue'
import ProjectTask from '../views/ProjectTask.vue'
import Timeline from '../views/Timeline.vue'
import Webapp from '../views/Webapp.vue'
import Customexport from '../views/Customexport.vue'
import Newboard from '../views/Newboard.vue'
import Meeting from '../views/Meeting.vue'
import Task from '../views/Task.vue'
import TimeSheetone from '../views/TimeSheetone.vue'
import TimeSheetTwo from '../views/TimeSheetTwo.vue'
import ScreenShootone from '../views/ScreenShootone.vue'
import ScreenShootTwo from '../views/ScreenShootTwo.vue'
import EditTime from '../views/EditTime.vue'
//setting dropdown page start
import Billing from '../views/Billing.vue'
import TaskSeeting from '../views/TaskSetting.vue'
import ProductivityRating from '../views/ProductivityRating.vue'
import User from '../views/User.vue'
import Group from '../views/Group.vue'
import EmailNotification from '../views/EmailNotification.vue'
import Integration from '../views/Integration.vue'
import Compnay from '../views/Compnay.vue'
import WorkSchedule from '../views/WorkSchedule.vue'
//setting dropdown page end
import Download from '../views/Download.vue'
import Invite from '../views/Invite.vue'
import profile from '../views/Profile.vue'
import security from '../views/ProfileSecurity.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projectOne',
      name: 'ProjectOne',
      component: ProjectOne
    },
    
    {
      path: '/projectTwo',
      name: 'ProjectTwo',
      component: ProjectTwo
    },
    {
      path: '/activitysummary',
      name: 'activitySummary',
      component: ActivitySummary
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance
    },
    {
      path: '/hourstrack',
      name: 'hourstrack',
      component:HoursTrack
    },
    {
      path: '/projecttask',
      name: 'ProjectTask',
      component:ProjectTask
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component:Timeline
    },
    {
      path: '/webapp',
      name: 'Webapp',
      component:Webapp
    },
    {
      path: '/customexport',
      name: 'Customexport',
      component:Customexport
    },
    {
      path: '/newboard',
      name: 'Newboard',
      component:Newboard
    },
    {
      path: '/meeting',
      name: 'Meeting',
      component:Meeting
    },
    {
      path: '/task',
      name: 'Task',
      component:Task
    },
    {
      path: '/timesheetone',
      name: 'TimeSheetone',
      component:TimeSheetone
    },
    {
      path: '/timesheetTwo',
      name: 'timesheetTwo',
      component:TimeSheetTwo
    },
    {
      path: '/screenshotone',
      name: 'ScreenShootone',
      component:ScreenShootone
    },
    {
      path: '/screenshotTwo',
      name: 'ScreenShootTwo',
      component:ScreenShootTwo
    },
    {
      path: '/edittime',
      name: ' EditTime',
      component:EditTime
    },
   //seeting page start
   {
    path: '/billing',
    name: 'Billing',
    component:Billing
  },
  {
    path: '/taskseeting',
    name: 'TaskSeeting',
    component:TaskSeeting
  },
  {
    path: '/productivityrating',
    name: 'ProductivityRating',
    component:ProductivityRating
  },
  {
    path: '/user',
    name: 'User',
    component:User
  },
  {
    path: '/group',
    name: 'Group',
    component:Group
  },
  {
    path: '/emailNotification',
    name: 'EmailNotification',
    component:EmailNotification
  },
  {
    path: '/integration',
    name: 'integration',
    component:Integration
  },
 
  {
    path: '/compnay',
    name: 'Compnay',
    component:Compnay
  },
  {
    path: '/workschedule',
    name: 'WorkSchedule',
    component:WorkSchedule
  },
 
  //seeting page end
 
    {
      path: '/download',
      name: 'download',
      component:Download
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile
    },
    {
      path: '/profilesecurity',
      name: 'ProfileSecurity',
      component:security
    },
    
  
   // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router