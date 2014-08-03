/*
 * File: app/view/ErpReceivableSheetDetGrid.js
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

Ext.define('foodprint.view.ErpReceivableSheetDetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.erpreceivablesheetdetgrid',

    itemId: 'detailGrid',
    autoScroll: true,
    title: 'ErpReceivableSheetDet',
    store: 'ErpSaleSheetDetStore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
                    dataIndex: 'sequence',
                    text: 'Sequence',
                    flex: 1,
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: '借/貸',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: '類別',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: '來源單別',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '來源單號',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '會計科目',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '科目名稱',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '幣別',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '部門別',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '部門名稱',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    enableColumnHide: false,
                    dataIndex: 'typeName',
                    hideable: false,
                    text: '匯率',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'tax',
                    text: '稅額',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subamounts',
                    text: '貨款',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'totalAmount',
                    text: '合計金額',
                    flex: 1
                },
                {
                    xtype: 'numbercolumn',
                    hidden: true,
                    dataIndex: 'customerOrderDet.id',
                    text: 'CustomerOrderDet.id',
                    flex: 1
                }
            ],
            listeners: {
                beforerender: {
                    fn: me.onGridBeforeRender1,
                    scope: me
                }
            }
        });

        me.processErpReceivableSheetDetGrid(me);
        me.callParent(arguments);
    },

    processErpReceivableSheetDetGrid: function(config) {

        return Utilities.processConfigBundle(config, 'receivableSheetDet');
    },

    onGridBeforeRender1: function(component, eOpts) {
        component.getStore().removeAll();
    }

});