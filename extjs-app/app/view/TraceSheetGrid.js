/*
 * File: app/view/TraceSheetGrid.js
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

Ext.define('foodprint.view.TraceSheetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tracesheetgrid',

    itemId: 'traceSheetGrid',
    store: 'TraceSheetDetailStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'id',
                    text: 'id',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'typeName',
                    text: 'typeName',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'sequence',
                    text: 'sequence',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'item.id',
                    text: 'item.id',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.name',
                    text: 'item.name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.title',
                    text: 'item.title',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'warehouse.id',
                    text: 'warehouse.id',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouse.name',
                    text: 'warehouse.name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouse.title',
                    text: 'warehouse.title',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'warehouseLocation.id',
                    text: 'warehouseLocation.id',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouseLocation.name',
                    text: 'warehouseLocation.name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouseLocation.title',
                    text: 'warehouseLocation.title',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'batch.id',
                    text: 'batch.id',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'batch.name',
                    text: 'batch.name',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'qty',
                    text: 'qty',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.unit',
                    text: 'item.unit',
                    flex: 1
                }
            ]
        });

        me.processTraceSheetGrid(me);
        me.callParent(arguments);
    },

    processTraceSheetGrid: function(config) {

        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'traceSheet'));

    }

});