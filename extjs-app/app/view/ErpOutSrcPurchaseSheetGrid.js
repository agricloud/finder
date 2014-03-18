/*
 * File: app/view/ErpOutSrcPurchaseSheetGrid.js
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

Ext.define('foodprint.view.ErpOutSrcPurchaseSheetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.erpoutsrcpurchasesheetgrid',

    itemId: 'erpOutSrcPurchaseSheetGrid',
    store: 'ErpOutSrcPurchaseSheetStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'ErpOutSrcPurchaseSheetStore'
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
                    dataIndex: 'supplier.id',
                    text: 'Supplier.Id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'supplier.name',
                    text: 'Supplier.Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'supplier.title',
                    text: 'Supplier.Title',
                    flex: 1
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onErpOutSrcPurchaseSheetGridAfterRender,
                    scope: me
                }
            }
        });

        me.processErpOutSrcPurchaseSheetGrid(me);
        me.callParent(arguments);
    },

    processErpOutSrcPurchaseSheetGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'outSrcPurchaseSheet'));
    },

    onErpOutSrcPurchaseSheetGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});