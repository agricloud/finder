/*
 * File: app/view/MainContainer.js
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

Ext.define('foodprint.view.MainContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.maincontainer',

    height: 650,
    id: 'mainCt',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    frame: true,
                    id: 'menuPanel',
                    itemId: 'manuPanel',
                    width: 141,
                    layout: {
                        type: 'accordion'
                    },
                    bodyBorder: false,
                    title: '',
                    items: [
                        me.processBasicDataMainten({
                            xtype: 'panel',
                            height: 250,
                            width: 400,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Basic Data Mainten',
                            items: [
                                me.processUserMaintain({
                                    xtype: 'button',
                                    itemId: 'userMaintain',
                                    text: 'User Maintain'
                                }),
                                me.processItemMaintain({
                                    xtype: 'button',
                                    itemId: 'itemMaintain',
                                    text: 'Item Maintain'
                                }),
                                me.processItemRouteMaintain({
                                    xtype: 'button',
                                    itemId: 'itemRouteMaintain',
                                    text: 'Item Route Maintain'
                                }),
                                me.processBatchMaintain({
                                    xtype: 'button',
                                    itemId: 'batchMaintain',
                                    text: 'Batch Maintain'
                                }),
                                me.processBatchRouteMaintain({
                                    xtype: 'button',
                                    itemId: 'batchRouteMaintain',
                                    text: 'Batch Route Maintain'
                                }),
                                me.processOperationMaintain({
                                    xtype: 'button',
                                    itemId: 'operationMaintain',
                                    text: 'Operation Maintain'
                                }),
                                me.processWorkstationMaintain({
                                    xtype: 'button',
                                    itemId: 'workstationMaintain',
                                    text: 'Workstation Maintain'
                                }),
                                me.processCustomerMaintain({
                                    xtype: 'button',
                                    itemId: 'customerMaintain',
                                    text: 'Customer Maintain'
                                }),
                                me.processSupplierMaintain({
                                    xtype: 'button',
                                    itemId: 'supplierMaintain',
                                    text: 'Supplier Maintain'
                                }),
                                me.processBatchSourceMaintain({
                                    xtype: 'button',
                                    itemId: 'batchSourceMaintain',
                                    text: 'Batch Source Maintain'
                                })
                            ]
                        }),
                        me.processSheetMainten({
                            xtype: 'panel',
                            height: 250,
                            width: 400,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Sheet Mainten',
                            items: [
                                me.processErpCustomerOrderMaintain({
                                    xtype: 'button',
                                    itemId: 'erpCustomerOrderMaintain',
                                    text: 'CustomerOrder Maintain'
                                }),
                                me.processErpCustomerOrderDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpCustomerOrderDetMaintain',
                                    text: 'CustomerOrderDet Maintain'
                                }),
                                me.processErpPurchaseSheetMaintain({
                                    xtype: 'button',
                                    itemId: 'erpPurchaseSheetMaintain',
                                    text: 'PurchaseSheet Maintain'
                                }),
                                me.processErpPurchaseSheetDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpPurchaseSheetDetMaintain',
                                    text: 'PurchaseSheetDet Maintain'
                                }),
                                me.processErpManufactureOrderMaintain({
                                    xtype: 'button',
                                    itemId: 'erpManufactureOrderMaintain',
                                    text: 'ManufactureOrder Maintain'
                                }),
                                me.processErpMaterialSheetMaintain({
                                    xtype: 'button',
                                    itemId: 'erpMaterialSheetMaintain',
                                    text: 'MaterialSheet Maintain'
                                }),
                                me.processErpMaterialSheetDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpMaterialSheetDetMaintain',
                                    text: 'MaterialSheetDet Maintain'
                                }),
                                me.processErpStockInSheetMaintain({
                                    xtype: 'button',
                                    itemId: 'erpStockInSheetMaintain',
                                    text: 'StockInSheet Maintain'
                                }),
                                me.processErpStockInSheetDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpStockInSheetDetMaintain',
                                    text: 'StockInSheetDet Maintain'
                                }),
                                me.processErpOutSrcPurchaseSheetMaintain({
                                    xtype: 'button',
                                    itemId: 'erpOutSrcPurchaseSheetMaintain',
                                    text: 'OutSrcPurchaseSheet Maintain'
                                }),
                                me.processErpOutSrcPurchaseSheetDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpOutSrcPurchaseSheetDetMaintain',
                                    text: 'OutSrcPurchaseSheetDet Maintain'
                                }),
                                me.processErpSaleSheetMaintain({
                                    xtype: 'button',
                                    itemId: 'erpSaleSheetMaintain',
                                    text: 'SaleSheet Maintain'
                                }),
                                me.processErpSaleSheetDetMaintain({
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'erpSaleSheetDetMaintain',
                                    text: 'SaleSheetDet Maintain'
                                })
                            ]
                        }),
                        me.processDataCollect({
                            xtype: 'panel',
                            height: 250,
                            width: 400,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Data Collect',
                            items: [
                                me.processParamMaintain({
                                    xtype: 'button',
                                    itemId: 'paramMaintain',
                                    text: 'Param Maintain'
                                }),
                                me.processReportMaintain({
                                    xtype: 'button',
                                    itemId: 'reportMaintain',
                                    text: 'Report Maintain'
                                }),
                                me.processReportParamsMaintain({
                                    xtype: 'button',
                                    itemId: 'reportParamsMaintain',
                                    text: 'ReportParams Maintain'
                                }),
                                me.processBatchParamsMaintain({
                                    xtype: 'button',
                                    itemId: 'batchParamsMaintain',
                                    text: 'BatchParamsMaintain'
                                })
                            ]
                        }),
                        me.processDataInquiry({
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'Data Inquiry',
                            items: [
                                me.processForwardTrace({
                                    xtype: 'button',
                                    itemId: 'forwardTrace',
                                    text: 'Forward Trace'
                                }),
                                me.processBackwardTrace({
                                    xtype: 'button',
                                    itemId: 'backwardTrace',
                                    text: 'Backward Trace'
                                })
                            ]
                        }),
                        me.processSystemManage({
                            xtype: 'panel',
                            hidden: true,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: 'System Manage',
                            items: [
                                me.processBundleAdmin({
                                    xtype: 'button',
                                    itemId: 'bundleAdmin',
                                    text: 'Language Manage'
                                }),
                                me.processPermissionAdmin({
                                    xtype: 'button',
                                    itemId: 'permissionAdmin',
                                    text: 'Authority Manage'
                                })
                            ]
                        })
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'mainPanel',
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            html: '<div class="mainpage-image"><img src="resources/images/main-select.png" width="185" height="125"></div>\n\n<div class="left-trees"><img src="resources/images/left-trees.png" width="110" height="50"></div>\n<div class="right-tree"><img src="resources/images/right-tree.png" width="28" height="37"></div>',
                            itemId: 'wellcome',
                            layout: {
                                type: 'fit'
                            },
                            bodyCls: [
                                'mainpage',
                                'x-panel-body-default',
                                'x-layout-fit'
                            ],
                            icon: 'resources/images/pin.png',
                            title: '目前位置：管理首頁'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'north',
                    height: 40,
                    html: '<header>\n	<div class="logo"><img src="resources/images/logo.png" width="166"></div>\n    <div class="logo-text">&gt;&gt; <span class="lspace">食品足跡系統</span> <small>V.1.0</small> <span class="font-brown"><strong>FoodPrint System</strong></span></div>\n  \n    \n	<div class="signature"><img src="resources/images/signature.png"></div>\n    <a href="#" class="btn-logout" id= \'btn-logout\'><img src="resources/images/btn-logout.jpg" width="66" height="20"></a>\n    <div class="username" id="username" >Chi Yen Hsiao</div>\n</header>',
                    itemId: 'northPanel'
                },
                {
                    xtype: 'container',
                    region: 'south',
                    height: 38,
                    html: '<footer><div class="bar" style="text-align:center"><img src="resources/images/leaf.png" /> Copyright &copy; 2013 AgriCloud. All Rights Reserved. 本系統由雲端農場研發設計</div></footer>',
                    itemId: 'southPanel'
                }
            ]
        });

        me.callParent(arguments);
    },

    processUserMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.userMaintain.label');

        return config;
    },

    processItemMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.itemMaintain.label');

        return config;
    },

    processItemRouteMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.itemRouteMaintain.label');

        return config;
    },

    processBatchMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.batchMaintain.label');

        return config;
    },

    processBatchRouteMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.batchRouteMaintain.label');

        return config;
    },

    processOperationMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.operationMaintain.label');

        return config;
    },

    processWorkstationMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.workstationMaintain.label');

        return config;
    },

    processCustomerMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.customerMaintain.label');

        return config;
    },

    processSupplierMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.supplierMaintain.label');

        return config;
    },

    processBatchSourceMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.batchSourceMaintain.label');

        return config;
    },

    processBasicDataMainten: function(config) {
        config.title=Utilities.getMsg('mainContainer.basicDataMaintain.label');

        return config;
    },

    processErpCustomerOrderMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.customerOrderMaintain.label');

        return config;
    },

    processErpCustomerOrderDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.customerOrderDetMaintain.label');

        return config;
    },

    processErpPurchaseSheetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.purchaseSheetMaintain.label');

        return config;
    },

    processErpPurchaseSheetDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.purchaseSheetDetMaintain.label');

        return config;
    },

    processErpManufactureOrderMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.manufactureOrderMaintain.label');

        return config;
    },

    processErpMaterialSheetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.materialSheetMaintain.label');

        return config;
    },

    processErpMaterialSheetDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.materialSheetDetMaintain.label');

        return config;
    },

    processErpStockInSheetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.stockInSheetMaintain.label');

        return config;
    },

    processErpStockInSheetDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.stockInSheetDetMaintain.label');

        return config;
    },

    processErpOutSrcPurchaseSheetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.outSrcPurchaseSheetMaintain.label');

        return config;
    },

    processErpOutSrcPurchaseSheetDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.outSrcPurchaseSheetDetMaintain.label');

        return config;
    },

    processErpSaleSheetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.saleSheetMaintain.label');

        return config;
    },

    processErpSaleSheetDetMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.saleSheetDetMaintain.label');

        return config;
    },

    processSheetMainten: function(config) {
        config.title=Utilities.getMsg('mainContainer.sheetMaintain.label');

        return config;
    },

    processParamMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.paramMaintain.label');

        return config;
    },

    processReportMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.reportMaintain.label');

        return config;
    },

    processReportParamsMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.reportParamsMaintain.label');

        return config;
    },

    processBatchParamsMaintain: function(config) {
        config.text=Utilities.getMsg('mainContainer.batchParamsMaintain.label');

        return config;
    },

    processDataCollect: function(config) {
        config.title=Utilities.getMsg('mainContainer.dataCollect.label');

        return config;
    },

    processForwardTrace: function(config) {
        config.text=Utilities.getMsg('mainContainer.forwardTrace.label');

        return config;
    },

    processBackwardTrace: function(config) {
        config.text=Utilities.getMsg('mainContainer.backwardTrace.label');

        return config;
    },

    processDataInquiry: function(config) {
        config.title=Utilities.getMsg('mainContainer.dataInquiry.label');

        return config;
    },

    processBundleAdmin: function(config) {
        config.text=Utilities.getMsg('mainContainer.languageManage.label');

        return config;
    },

    processPermissionAdmin: function(config) {
        config.text=Utilities.getMsg('mainContainer.authorityManage.label');

        return config;
    },

    processSystemManage: function(config) {
        config.title=Utilities.getMsg('mainContainer.systemManage.label');

        return config;
    }

});