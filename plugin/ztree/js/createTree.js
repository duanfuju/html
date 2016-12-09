/**
 * Created by shangb on 2016/9/20.
 */
var setting = {};

var zNodes = [
    {
        name: "备品备件", open: true,
        children: [
            {
                name: "轴承",open: true,
                children: [
                    {name: "轴承1"},
                    {name: "轴承2"},
                    {name: "轴承3"},
                    {name: "轴承4"},
                    {name: "轴承5"},
                    {name: "轴承6"},
                    {name: "轴承7"}

                ]
            },
            {
                name: "阀门",
                children: [
                    {name: "阀门1"},
                    {name: "阀门2"},
                    {name: "阀门3"},
                    {name: "阀门4"},
                    {name: "阀门5"},
                    {name: "阀门6"}
                ]
            },
            {name: "父节点13 - 没有子节点", isParent: true}
        ]
    },
    {
        name: "电器物资",
        children: [
            {
                name: "电器物资1",
                children: [
                    {name: "电器物资11"},
                    {name: "电器物资12"},
                    {name: "电器物资13"},
                    {name: "电器物资14"},
                    {name: "电器物资15"},
                    {name: "电器物资16"}
                ]
            },
            {
                name: "电器物资2",
                children: [
                    {name: "电器物资21"},
                    {name: "电器物资22"},
                    {name: "电器物资23"},
                    {name: "电器物资24"},
                    {name: "电器物资25"},
                    {name: "电器物资26"}
                ]
            },
            {
                name: "电器物资3",
                children: [
                    {name: "电器物资31"},
                    {name: "电器物资32"},
                    {name: "电器物资33"},
                    {name: "电器物资34"},
                    {name: "电器物资35"},
                    {name: "电器物资36"}
                ]
            }

        ]
    },
    {
        name: "分离物资",
        children: [
            {
                name: "分离物资1",
                children: [
                    {name: "分离物资11"},
                    {name: "分离物资12"},
                    {name: "分离物资13"},
                    {name: "分离物资14"},
                    {name: "分离物资15"},
                    {name: "分离物资16"}
                ]
            },
            {
                name: "分离物资2",
                children: [
                    {name: "分离物资21"},
                    {name: "分离物资22"},
                    {name: "分离物资23"},
                    {name: "分离物资24"},
                    {name: "分离物资25"},
                    {name: "分离物资26"}
                ]
            },
            {
                name: "分离物资3",
                children: [
                    {name: "分离物资31"},
                    {name: "分离物资32"},
                    {name: "分离物资33"},
                    {name: "分离物资34"},
                    {name: "分离物资35"},
                    {name: "分离物资36"}
                ]
            }

        ]
    },
    {
        name: "电动工具",
        children: [
            {
                name: "电动工具1",
                children: [
                    {name: "电动工具11"},
                    {name: "电动工具12"},
                    {name: "电动工具13"},
                    {name: "电动工具14"},
                    {name: "电动工具15"},
                    {name: "电动工具16"}
                ]
            },
            {
                name: "电动工具2",
                children: [
                    {name: "电动工具21"},
                    {name: "电动工具22"},
                    {name: "电动工具23"},
                    {name: "电动工具24"},
                    {name: "电动工具25"},
                    {name: "电动工具26"}
                ]
            },
            {
                name: "电动工具3",
                children: [
                    {name: "电动工具31"},
                    {name: "电动工具32"},
                    {name: "电动工具33"},
                    {name: "电动工具34"},
                    {name: "电动工具35"},
                    {name: "电动工具36"}
                ]
            }

        ]
    },
    {
        name: "仪器物资",
        children: [
            {
                name: "仪器物资1",
                children: [
                    {name: "仪器物资11"},
                    {name: "仪器物资12"},
                    {name: "仪器物资13"},
                    {name: "仪器物资14"},
                    {name: "仪器物资15"},
                    {name: "仪器物资16"}
                ]
            },
            {
                name: "仪器物资2",
                children: [
                    {name: "仪器物资21"},
                    {name: "仪器物资22"},
                    {name: "仪器物资23"},
                    {name: "仪器物资24"},
                    {name: "仪器物资25"},
                    {name: "仪器物资26"}
                ]
            },
            {
                name: "仪器物资3",
                children: [
                    {name: "仪器物资31"},
                    {name: "仪器物资32"},
                    {name: "仪器物资33"},
                    {name: "仪器物资34"},
                    {name: "仪器物资35"},
                    {name: "仪器物资36"}
                ]
            }

        ]
    },
    {
        name: "专用工具",
        children: [
            {
                name: "专用工具1",
                children: [
                    {name: "专用工具11"},
                    {name: "专用工具12"},
                    {name: "专用工具13"},
                    {name: "专用工具14"},
                    {name: "专用工具15"},
                    {name: "专用工具16"}
                ]
            },
            {
                name: "专用工具2",
                children: [
                    {name: "专用工具21"},
                    {name: "专用工具22"},
                    {name: "专用工具23"},
                    {name: "专用工具24"},
                    {name: "专用工具25"},
                    {name: "专用工具26"}
                ]
            },
            {
                name: "专用工具3",
                children: [
                    {name: "专用工具31"},
                    {name: "专用工具32"},
                    {name: "专用工具33"},
                    {name: "专用工具34"},
                    {name: "专用工具35"},
                    {name: "专用工具36"}
                ]
            }

        ]
    }

];

$(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
//-->
