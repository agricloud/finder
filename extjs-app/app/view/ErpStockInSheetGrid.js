/*
 * File: app/view/ErpStockInSheetGrid.js
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

Ext.define('foodprint.view.ErpStockInSheetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.erpstockinsheetgrid',

    itemId: 'erpStockInSheetGrid',
    store: 'ErpStockInSheetStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'ErpStockInSheetStore'
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
                    dataIndex: 'workstation.id',
                    text: 'Workstation.Id',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'workstation.name',
                    text: 'Workstation.Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'workstation.title',
                    text: 'Workstation.Title',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'stockInDate',
                    text: 'StockInDate',
                    flex: 1,
                    format: 'Y-m-d'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onErpStockInSheetGridAfterRender,
                    scope: me
                }
            }
        });

        me.processErpStockInSheetGrid(me);
        me.callParent(arguments);
    },

    processErpStockInSheetGrid: function(config) {
        return Utilities.createFiltersFeature(Utilities.processConfigBundle(config, 'stockInSheet'));
    },

    onErpStockInSheetGridAfterRender: function(component, eOpts) {
        component.getStore().load();
    }

});