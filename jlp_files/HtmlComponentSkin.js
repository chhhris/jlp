/**
 * Created by IntelliJ IDEA.
 * User: sivanb
 * Date: 11/21/11
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
define.oldSkin({
    name: 'wysiwyg.viewer.skins.HtmlComponentSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [],
        _html:  '<div  skinPart="iFrameHolder"></div>',
        _css: [
            '%iFrameHolder% {width:100%,height:100%}',
            '%iFrameHolder% > iframe { position:absolute; }',
            '[state=noContent] { background-color:#A5A5A5; }'
        ]
    }
});