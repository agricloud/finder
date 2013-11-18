/*
 * File: app/model/BatchReportPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('foodprintTouch.model.BatchReportPanel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                mapping: 'batchReport.id',
                name: 'batchReport__id'
            },
            {
                mapping: 'batchReport.name',
                name: 'batchReport__name'
            },
            {
                mapping: 'batchReport.title',
                name: 'batchReport__title'
            },
            {
                mapping: 'batchReportDets',
                name: 'batchReportDets'
            }
        ]
    }
});