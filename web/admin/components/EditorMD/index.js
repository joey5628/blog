import React, { Component } from 'react'
import './css/editormd.css'
import config from '../../config'

const loadEditorMD = () => {
    return new Promise((resolve, reject)=> {
        if (window.editormd) {
            resolve(true)
        } else {
            const script = document.createElement('script')
            script.async = true
            script.onerror = () => {
                reject(false)
            }
            script.onload = () => {
                resolve(true)
            }
            script.src = `${config.qiniuDomain}/editormd/editormd.min.js`
            document.head.appendChild(script)
        }
    })
}

const defaultConfig = {
    // 组件接入方，并不需要知道具体ID
    id: 'EditorID' + new Date().getTime(),
    width: "100%",
    height: 700,
    // 静态资源路径
    path: 'https://s0.meituan.net/xm/open-platform-static/editormd/lib/',
    // theme : "dark",
    // previewTheme : "dark",
    editorTheme: "pastel-on-dark",
    markdown: 'Hello **World**!',
    codeFold: true,
    // syncScrolling : false,
    saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
    searchReplace: true,
    // watch : false,                // 关闭实时预览
    htmlDecode: "style,script,iframe|on*", // 开启 HTML 标签解析，为了安全性，默认不开启
    // toolbar  : false,             //关闭工具栏
    // previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
    emoji: true,
    taskList: true,
    tocm: true, // Using [TOCM]
    tex: true, // 开启科学公式TeX语言支持，默认关闭
    flowChart: true, // 开启流程图支持，默认关闭
    sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
    // dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
    // dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
    // dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
    // dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
    // dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
    imageUpload: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "./php/upload.php",
    onload: function onload() {}
}

export default class Editor extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await loadEditorMD()

        let {config} = this.props
        config = Object.assign({}, defaultConfig, config)

        let {
            id, width, height, path, theme, previewTheme, editorTheme, markdown, codeFold, syncScrolling,
            saveHTMLToTextarea, searchReplace, watch, htmlDecode, toolbar, previewCodeHighlight, emoji,
            taskList, tocm, tex, flowChart, sequenceDiagram, dialogLockScreen, dialogShowMask, dialogDraggable,
            dialogMaskOpacity, dialogMaskBgColor, imageUpload, imageFormats, imageUploadURL, onload
        } = config

        // 静态资源地址修改
        if(path !== defaultConfig.path){
            console.warn('Editor warning: Static resource address has changed, if you know exactly what you\'re doing, ignore this warning');
        }

        this.editor = editormd(id, {
            width: width,
            height: height,
            path: path,
            theme: theme,
            previewTheme: previewTheme,
            editorTheme: editorTheme,
            markdown: markdown,
            codeFold: codeFold,
            syncScrolling: syncScrolling,
            saveHTMLToTextarea: saveHTMLToTextarea,    // 保存 HTML 到 Textarea
            searchReplace: searchReplace,
            watch: watch,                // 关闭实时预览
            htmlDecode: htmlDecode,            // 开启 HTML 标签解析，为了安全性，默认不开启
            toolbar: toolbar,             //关闭工具栏
            previewCodeHighlight: previewCodeHighlight, // 关闭预览 HTML 的代码块高亮，默认开启
            emoji: emoji,
            taskList: taskList,
            tocm: tocm,         // Using [TOCM]
            tex: tex,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart: flowChart,             // 开启流程图支持，默认关闭
            sequenceDiagram: sequenceDiagram,       // 开启时序/序列图支持，默认关闭,
            dialogLockScreen: dialogLockScreen,   // 设置弹出层对话框不锁屏，全局通用，默认为true
            dialogShowMask: dialogShowMask,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
            dialogDraggable: dialogDraggable,    // 设置弹出层对话框不可拖动，全局通用，默认为true
            dialogMaskOpacity: dialogMaskOpacity,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
            dialogMaskBgColor: dialogMaskBgColor, // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
            imageUpload: imageUpload,
            imageFormats: imageFormats,
            imageUploadURL: imageUploadURL,
            onload: function(){
                onload(this.editor, this);
            }
        });
    }

    getMarkdown() {
        return this.editor.getMarkdown()
    }

    getHTML() {
        let {config} = this.props;
        config = Object.assign({}, defaultConfig, config);
        if ( config.watch ) {
            return this.editor.getPreviewedHTML();
        }
        return editormd.markdownToHTML('_previewHtml', {markdown: this.editor.getMarkdown()}).html();
    }

    render(){
        let {config} = this.props;
        config = Object.assign({}, defaultConfig, config);

        return (<div style={{ width: config.width, height: config.height}}><div id={config.id}></div><div id='_previewHtml' style={{display: 'none'}}></div></div>);
    }
}

