define.oldSkin({
    name: 'wysiwyg.viewer.skins.page.LiftedBottomPageSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'bg','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},
            {'id':'brd',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'},
            {'id':'brw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '1px'},
//            {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '5px'},

            {'id':'sz','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'-15px'},
            {'id':'cornerSz','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'50px'},
            {'id':'midSz','type':Constants.SkinParamTypes.OTHER, 'defaultValue':'35px'},
            {'id':'pos','type':Constants.SkinParamTypes.URL,  'defaultValue': ' position:absolute; top:0; bottom:0; left:0; right:0;'},
            {'id':'tdr','type':Constants.SkinParamTypes.URL, 'defaultTheme':'BASE_THEME_DIRECTORY'}
        ],
        _html:
            '<div class="shadow leftBottom"></div>' +
            '<div class="shadow centerBottom"></div>' +
            '<div class="shadow rightBottom"></div>' +

            '<div skinPart="bg"></div><div skinPart="inlineContent"></div>',
        _css: [
            '%.shadow%  {  position:absolute; top:[sz]; bottom:[sz]; ' +
                             'background-image:url([tdr]shdbottom.png); background-repeat:no-repeat; }',
            '%.leftBottom%   { left:[sz]; background-position:left bottom; width:[cornerSz]; }',
            '%.rightBottom%   { right:[sz]; background-position:right bottom; width:[cornerSz]; }',
            '%.centerBottom%   { right:[midSz]; left:[midSz]; background-position:center bottom; }',

            '%bg% {[pos][bg] border:[brw] solid [brd];}',
            '%inlineContent% {[pos] bottom:20px;}'
        ]
    }
});