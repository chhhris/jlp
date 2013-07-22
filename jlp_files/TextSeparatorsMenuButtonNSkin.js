define.oldSkin({
    name: 'wysiwyg.viewer.skins.dropmenubutton.TextSeparatorsMenuButtonNSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        _params: [
            {'id':'fnt','type':Constants.SkinParamTypes.FONT,'defaultTheme':'font_1'},
            {'id':'txt',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_15'},
            {'id':'txth',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_14'},
            {'id':'txts',  'type':Constants.SkinParamTypes.COLOR,'defaultTheme':'color_14'},
            {'id':'pad', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '5px'},
            {'id':'sep',  'type':Constants.SkinParamTypes.COLOR_ALPHA, 'defaultTheme':'color_15'},

            {'id':'trans','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'color 0.4s ease 0s'}
        ],
        _html: '<div class="wrapper"><div skinPart="bg"><p skinPart="label"></p></div></div>',
        _css: [
            '{ display:inline-block; cursor:pointer; color:[txt]; [fnt] [trans] border-left: 1px solid [sep]; }',
            '%label% { display:inline-block; padding: 0px 10px; }',
            '%.wrapper% {padding: 0 [pad];}',

            // left button
            //  >>>> Menu with separators: Can't use [listposition=left] because it does not cover all cases
            ':first-child { border:none; }',
            // single button
            '[listposition=lonely] { border:none; }',

            // hover
            '[state=over]  { color: [txth]; [trans] }',
            // selected
            '[state=selected] { color: [txts]; [trans] }',


            // ===> the buttons on the drop down menu  <====
            '[container=drop] { width:100%; display:block; border:none; border-top:1px solid [sep]; }',
            '[container=drop] %label% { display:inline-block; padding:0 0.5em; }',
            '[container=drop] %.wrapper% { padding: 0; }',
            // top button, drop down
            '[listposition=top] { border:none; }',
            // single button, drop down
            '[listposition=dropLonely] { border:none; }'
        ]
    }
});