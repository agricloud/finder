/*
 * File: app/view/ErpSaleReturnSheetGrid.js
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

Ext.define('foodprint.view.ErpSaleReturnSheetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.erpsalereturnsheetgrid',

    itemId: 'erpSaleReturnSheetGrid',
    store: 'ErpSaleReturnSheetStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'ErpSaleReturnSheetStore'
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
                    xtype: 'gridcolumn',
                    dataIndex: 'typeName',
                    text: 'TypeName',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'customer.id',
                    text: 'Customer.Id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'customer.name',
                    text: 'Customer.Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'customer.title',
                    text: 'Customer.Title',
                    flex: 1
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onErpSaleReturnSheetGridAfterRender,
                    scope: me
                }
            }
        });

        me.processErpSaleReturnSheetGrid(me);
        me.callParent(arguments);
    },

    processErpSaleReturnSheetGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'saleReturnSheet'));
    },

    onErpSaleReturnSheetGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});