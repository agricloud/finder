/*
 * File: app/controller/WorkstationController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('foodprint.controller.WorkstationController', {
    extend: 'Ext.app.Controller',

    mixins: {
        commonController: 'foodprint.controller.CommonController'
    },

    models: [
        'Workstation'
    ],
    stores: [
        'WorkstationStore'
    ],
    views: [
        'WorkstationView'
    ],

    refs: [
        {
            ref: 'mainGrid',
            selector: 'workstationview #grid'
        },
        {
            ref: 'mainForm',
            selector: 'workstationview #form'
        }
    ],

    init: function(application) {

        this.control({
            'workstationview #index commonindextoolbar commoncreatebtn':{
                click:this.doCreate
            },
            'workstationview #index commonindextoolbar commonshowbtn':{
                click:this.doShow
            },
            'workstationview #show commonshowtoolbar commondeletebtn':{
                click:this.doDelete
            },
            'workstationview #show commonshowtoolbar commonsavebtn':{
                click:this.doSave
            },
            'workstationview #show commonshowtoolbar commoncancelbtn':{
                click:this.doCancel
            },
            'workstationview #grid':{
                select: this.enableShowBtn,
                deselect: this.disableShowBtn,
                itemdblclick: this.doShow
            }

        });


        this.domainName = 'workstation';
    }

});
