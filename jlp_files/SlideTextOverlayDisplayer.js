define.oldSkin({
    name: 'wysiwyg.viewer.skins.displayers.SlideTextOverlayDisplayer',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        compParts:{image: {skin:'mobile.core.skins.ImageSkin' }
        },
        _params: [

            //{'id':'bg',   'type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_11'},

            {'id':'bg','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_15',  styleDefaults:{alpha:0.8} },

            {'id':'txt',  'type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_11'},

            {'id':'brw',  'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '0px'},
            {'id':'s',    'type':Constants.SkinParamTypes.SIZE, 'mutators':['decrease', 1], 'defaultParam': 'brw'},

            {'id':'fntt', 'type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_6'},
            {'id':'fntds','type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_8'},
            {'id':'rd',   'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '0px'},
            {'id':'trns', 'type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'opacity 0.5s ease 0s'}
        ],
        _html:
            '<div skinPart="imageWrapper">'+
                '<div skinPart="zoom"><div skinPart="image"></div></div>' +
                '<div class="pnl" skinPart="panel">' +
                    '<h3 skinPart="title"></h3>' +
                    '<p  skinPart="description"></p>' +
                    '<a  skinPart="link" >Go to link</a>'+
                '</div>' +
            '</div>' ,
        _css: [

                '%zoom%  { position:absolute; top:[brw]; right:[brw]; bottom:[brw]; left:[brw];  }',
                '%image% { [rd] }',
                '%panel% { [rd][bg][trns] opacity:0; filter: alpha(opacity=0); position:absolute; right:[brw]; left:[brw]; bottom:[s]; padding:10px 100px 10px 10px;' +

                         'min-height:18px;'+
                    '-moz-border-top-left-radius: 0 !important; -moz-border-top-right-radius: 0 !important; ' +
                    '-webkit-border-top-left-radius: 0 !important; -webkit-border-top-right-radius: 0 !important; ' +
                    'border-top-left-radius: 0 !important; border-top-right-radius: 0 !important; ' +
                '}',

                    '%title%       { [fntt] color:[txt]; }',
                    '%description% { [fntds]color:[txt]; }',
                    '%link%        { [fntds]color:[txt]; }',

                        '[state~=transOut] %panel% { opacity:0; filter: alpha(opacity=0);}',
                        '[state~=transIn]  %panel% { opacity:0; filter: alpha(opacity=0);}',

                        '[state~=link]   %link%  { text-decoration:underline; cursor:pointer; [fntds]color:[txt];  }',
                        '[state~=noLink] %link%  { display:none; }'
        ]
    }
});