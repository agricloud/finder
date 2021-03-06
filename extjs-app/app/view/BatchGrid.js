/*
 * File: app/view/BatchGrid.js
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

Ext.define('foodprint.view.BatchGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.batchgrid',

    itemId: 'batchGrid',
    store: 'BatchStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                loadingText: 'Loading..'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'id',
                    text: 'Id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    flex: 1.5
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'item.id',
                    text: 'Item_id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.name',
                    text: 'Item_Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.title',
                    text: 'Item_Title',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.spec',
                    text: 'Item_Spec',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.unit',
                    text: 'Item_Unit',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'item.description',
                    text: 'Item_Description',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'country',
                    text: 'Country',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'countryTitle',
                    text: 'CountryTitle',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'supplier.id',
                    text: 'Supplier_Id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'supplier.name',
                    text: 'Supplier_Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'supplier.title',
                    text: 'Supplier_Title',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    hidden: true,
                    dataIndex: 'dueDate',
                    text: 'DueDate',
                    flex: 1,
                    format: 'Y-m-d'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'expectQty',
                    text: 'ExpectQty',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    hidden: true,
                    dataIndex: 'manufactureDate',
                    text: 'ManufactureDate',
                    flex: 1,
                    format: 'Y-m-d'
                },
                {
                    xtype: 'datecolumn',
                    hidden: true,
                    dataIndex: 'expirationDate',
                    text: 'ExpirationDate',
                    flex: 1,
                    format: 'Y-m-d'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'remark',
                    text: 'Remark',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    store: 'BatchStore'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onBatchGridAfterRender,
                    scope: me
                }
            }
        });

        me.processBatchGrid(me);
        me.callParent(arguments);
    },

    processBatchGrid: function(config) {

        config.text=Utilities.getMsg('default.message.load');
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'batch'));
    },

    onBatchGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});