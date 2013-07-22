define.oldSkin({
    name: 'wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryCircleSkin',
    Class: {
        Extends:'mobile.core.skins.BaseSkin',
        compParts:{
            imageItem: {skin:'wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerCircleSkin', styleGroup:'inherit' }
        },
        _params: [


              {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'} ,
              {'id':'fntds', 'type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_8'}

//            {'id':'bg','type':Constants.SkinParamTypes.BG_COLOR, 'defaultTheme':'color_1'},
//            {'id':'bg1','type':Constants.SkinParamTypes.BG_COLOR, 'mutators':['alpha',60], 'defaultTheme':'color_8'},
//            {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_10'} ,
//            {'id':'brw', 'type':Constants.SkinParamTypes.SIZE, 'defaultValue': '0px'},
//            {'id':'shd','type':Constants.SkinParamTypes.BOX_SHADOW, 'defaultValue':'0 1px 3px rgba(0, 0, 0, 0.5);'},
//            {'id':'rd', 'type':Constants.SkinParamTypes.BORDER_RADIUS, 'defaultValue': '50%', 'noshow':true} ,
//            {'id':'trns','type':Constants.SkinParamTypes.TRANSITION,'defaultValue': 'opacity 0.5s ease 0s'}
        ],
        heightDiff: 40,
        _html:  '<div skinPart="itemsContainer"></div><div skinPart="showMore">Show More!</div>',
        _css: [
             '%showMore% { color:[txt]; [fntds] cursor:pointer; text-decoration: underline !important; height:30px; line-height:30px; ' +
               'position:absolute; bottom:0px; left:35%; right:35%; text-align:center; }',
            '[state~=fullView] %showMore% { display: none; }'
        ]
    }
});


//define.oldSkin({
//    name: 'wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryCircleSkin',
//    Class: {
//        Extends:'mobile.core.skins.BaseSkin',
//        compParts:{
//            imageItem: {skin:'wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerCircleSkin', styleGroup:'inherit' }
//        },
//        _params: [
//            {'id':'txt','type':Constants.SkinParamTypes.COLOR, 'defaultTheme':'color_15'} ,
//            {'id':'fntds', 'type':Constants.SkinParamTypes.FONT, 'defaultTheme': 'font_8'}
//        ],
//        heightDiff: 40,
//        _html:  '<div skinPart="itemsContainer"></div><div skinPart="showMore">Show More</div>',
//        _css: [
//            '%showMore% { color:[txt]; [fntds] cursor:pointer; text-decoration: underline !important; height:30px; line-height:30px; ' +
//                'position:absolute; bottom:0px; left:35%; right:35%; text-align:center; }',
//            '[state~=fullView] %showMore% { display: none; }'
//        ]
//    }
//});