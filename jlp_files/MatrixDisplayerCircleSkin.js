define.oldSkin({
    name: 'wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerCircleSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        compParts:{
            image: {skin:'mobile.core.skins.ImageSkin' }
        },

        _params: [
            {'id':'fntt', 'type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_6'},
            {'id':'fntds', 'type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_8'},

            {'id':'brd','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_15'},
            {'id':'bgh','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_17',  styleDefaults:{alpha:0.6}},
            {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'},
            {'id':'ttl','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'},
            {'id':'brw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '0px'},
            {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '50%', 'noshow':true},

            {'id':'shd','type':Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue':'0 1px 3px rgba(0, 0, 0, 0.5);'},
            {'id':'trns','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'opacity 0.5s ease 0s'}
        ],
        _html:

            '<div skinPart="imageWrapper">' +
                '<div class="imgBorder"><div skinPart="image"></div></div>' +
            '</div>' +
            '<div skinPart="zoom">' +
                '<div skinPart="title"></div>' +
                '<div skinPart="description"></div>' +
                '<a skinPart="link">Go to link</a>'+
            '</div>',
        _css: [
            '{ [rd][brd][shd] overflow:hidden; }',
            '%.imgBorder% { position:absolute; top:[brw]; bottom:[brw]; left:[brw]; right:[brw]; overflow:hidden; }',

            '%zoom% { filter: alpha(opacity=0); opacity:0; [trns][rd][bgh] text-align:center; padding:15%; position:absolute; top:[brw]; bottom:[brw]; left:[brw]; right:[brw]; overflow:hidden; }',

            '%title%       { color:[ttl]; [fntt]  white-space:nowrap; }',
            '%description% { color:[txt]; [fntds] white-space:nowrap; }',
            '%link%        { color:[txt]; [fntds] white-space:nowrap; text-decoration: underline !important;  }',

            '%image%       { overflow:hidden;[rd] }',
            // noLink
            '[state~=noLink] %link% { display: none; }',
            // hover
            ':hover %zoom% { filter: alpha(opacity=100); opacity:1; }',
            ':hover %zoom% %title% { [fntt] color:[ttl]; }'
        ]
    }
});