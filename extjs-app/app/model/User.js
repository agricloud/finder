/*
 * File: app/model/User.js
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

Ext.define('foodprint.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {
            mapping: 'id',
            name: 'id'
        },
        {
            name: 'username'
        },
        {
            name: 'password'
        },
        {
            name: 'enabled'
        },
        {
            name: 'site.id'
        },
        {
            name: 'site.name'
        },
        {
            name: 'site.title'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/user',
        reader: {
            type: 'json',
            root: 'userInstanceList',
            totalProperty: 'userInstanceTotal'
        }
    }
});