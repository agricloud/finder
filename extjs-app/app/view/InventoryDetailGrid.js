/*
 * File: app/view/InventoryDetailGrid.js
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

Ext.define('foodprint.view.InventoryDetailGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.inventorydetailgrid',

    itemId: 'inventoryDetailGrid',
    store: 'InventoryDetailStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'InventoryDetailStore'
                }
            ],
            columns: [
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'id',
                    text: 'Id',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'warehouse.id',
                    text: 'Warehouse.id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouse.name',
                    text: 'Warehouse.name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'warehouse.title',
                    text: 'Warehouse.title',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'item.id',
                    text: 'Item.id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.name',
                    text: 'Item.name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.title',
                    text: 'Item.title',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'batch.id',
                    text: 'Batch.id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'batch.name',
                    text: 'Batch.name',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'qty',
                    text: 'Qty',
                    flex: 1
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onInventoryDetailGridAfterRender,
                    scope: me
                }
            }
        });

        me.processInventoryDetailGrid(me);
        me.callParent(arguments);
    },

    processInventoryDetailGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'inventoryDetail'));
    },

    onInventoryDetailGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});