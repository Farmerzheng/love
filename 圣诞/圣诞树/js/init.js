function initSidebar(){
    var w_ht = window.innerHeight?window.innerHeight:$(window).height();
    $('#sidebar').height(w_ht - $(".navbar-inverse").height());
};
/*
 * init sidebar menus
 * @returns {undefined}
 */
function initMenu() {
	//$('#menu ul').hide();
	//$('#menu ul:last').show();
	$('#menu li a').click(
	function() {
        $('#menu li > a').removeClass("active");
        $(this).addClass("active");
		var checkElement = $(this).next();
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            checkElement.hide();
		}else if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
				$('ul.select2-selection__rendered').show();
				return false;
			}
		}
	);
}
/*
 * load external resources
 * @returns {String}
 */
function loadResouces(){
    var res='';
    $('#external_resources_list > li').each(function (){
        var tmp_res = $(":first-child", $(this)).text();
        if(tmp_res.indexOf(".js") > -1) {
            tmp_res = '<script src="' + tmp_res + '"><\/script>';
        }else if(tmp_res.indexOf(".css") > -1) {
            tmp_res = '<link rel="stylesheet" type="text/css" href="' + tmp_res + '">';
        } else {
            tmp_res = '';
        }
        res += tmp_res;
    });
    return res;
}

/*
 * load imported frameworks 
 * @returns {String}
 */
function loadLibs(){
    var libs = '';
    $('#libs option:selected').each(
    	function(){
    	    var libs_val = $(this).attr('rel');
    	    var reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    	    if(libs_val.match(reg)){
    	        var tmp_res = libs_val;
    	    }else{
    	        var tmp_res = '//wow.techbrood.com'+libs_val;
    	    }
    	    var code_html = $('#code-html').val();
    	    if(code_html.indexOf(libs_val)<0){
    	        if(tmp_res.indexOf(".js") > -1) {
    	            libs += '<script src="' + tmp_res + '"><\/script>';
    	        }else if(tmp_res.indexOf(".css") > -1) {
    	            libs += '<link rel="stylesheet" type="text/css" href="' + tmp_res + '">';
    	        } 
    	    } 
    	}
    );
    return libs;
}
/*
 * new or update a fiddle
 */
function editFiddle(){
    var id = $("#fiddle_id").text();
    //load selected framework
    //var libs = loadLibs();
    //load external resources
    //var ex_res = loadResouces();

    var js_type = $('#JS_TYPE').val();
    if(js_type=='1'){
    	if($('#JS_CURRENT_MODE').val()=='0'){
    		var code_js = js_editor.getValue();
    	}else if($('#JS_CURRENT_MODE').val()=='1'){
    		var code_Js = $('#BABEL_VALUE').val();
    	}
    }else{
    	var code_js = js_editor.getValue();
    }
    var css_type = $('#CSS_TYPE').val();
    if(css_type=='0'){
    	var code_css = css_editor.getValue();
    }else if(css_type=='1'){
    	if($('#CSS_CURRENT_MODE').val()=='0'){
    		var code_css = css_editor.getValue();
    	}else if($('#CSS_CURRENT_MODE').val()=='1'){
    		var code_css = $('#SCSS_VALUE').val();
    	}
    }
    var code_html = ''; 
    //if(libs) code_html += libs + "\r\n";        
    //if(ex_res) code_html += ex_res + "\r\n";
    code_html += html_editor.getValue();
    var name = $("#id_title").val();
    var description = $("#id_description").val();
    var tags = $("#id_tags").val();
    var price = $("#id_price").val(); 
    var refuse_description = $("#id_refuse_description").val(); 
    var is_public = $("input[name='is_public']:checked").val();
    var lib_ids = $("#libs").val();
    if($("select[name=status]") != undefined){
    	data = {id: id, js: code_js, js_type: js_type, css_type: css_type, css: code_css, html: code_html, name: name, description: description, tags: tags,price: price,is_public: is_public,refuse_description: refuse_description, libs: lib_ids, status: $("select[name=status]").val()}
    }else{
    	data = {id: id, js: code_js, js_type: js_type, css_type: css_type, css: code_css, html: code_html, name: name, description: description, tags: tags,price: price,is_public: is_public,refuse_description: refuse_description, libs: lib_ids}
    }
    //if(empty(code_html)) return false;
    $.ajax(
        {
            type:		'post',
            url:		'/fiddle/edit',
            data:		data,
            cache:		false,
            async:		false,
            success:	function(res){
                            json = JSON.parse(res);
                            if(json.code == 302) {
                                alert('抱歉，该作品不能更改，系统将自动为你建立拷贝版本。');
                                window.location.href = "/fiddle/fork?id="+json.id;
                            }else if(json.code){
                                window.location.href = "/fiddle/"+json.id;
                            }else if(json.desc === 'nok:access'){
                                window.location.href = '//techbrood.com/login?back_url='+window.location.href;
                            }else if(json.desc === 'nok:database'){
                                alert('数据保存失败，请稍后再试。');
                            }else {
                                alert(json.desc);
                            }
                        }
        }
    );    
}
/*
 * download a new fiddle
 * @return {json}
 */
function downloadFiddle(){
    var id = $("#fiddle_id").text();
    //load selected framework
    //var libs = loadLibs();
    //load external resources
    //var ex_res = loadResouces();    
    var code_js = js_editor.getValue();
    var js_type = $('#JS_TYPE').val();
    var css_type = $('#CSS_TYPE').val();
    if(css_type=='0'){
    	var code_css = css_editor.getValue();
    }else if(css_type=='1'){
    	if($('#CSS_CURRENT_MODE').val()=='0'){
    		var code_css = css_editor.getValue();
    	}else if($('#CSS_CURRENT_MODE').val()=='1'){
    		var code_css = $('#SCSS_VALUE').val();
    	}
    }
    var code_html = '';
    //if(libs) code_html += libs + "\r\n";        
    //if(ex_res) code_html += ex_res + "\r\n";
    code_html += html_editor.getValue();
    var name = $("#id_title").val();
    var description = $("#id_description").val();
    var tags = $("#id_tags").val();
    var price = $("#id_price").val(); 
    var refuse_description = $("#id_refuse_description").val(); 
    var is_public = $("input[name='is_public']:checked").val();
    if(empty(code_html)) return false;
    $.ajax(
        {
            type:		'post',
            url:		'/fiddle/download',
            data:		{id: id},
            cache:		false,
            async:		false,
            success:	function(res){
                            json = JSON.parse(res);
                            if(json.code === 1){
                                export_raw(json.static_name+'.html',json.static_src);
                            }else if(json.desc === 'nok:access'){
                                window.location.href = '//techbrood.com/login?back_url='+window.location.href;
                            }else {
                                alert(json.desc);
                            }
                        }
        }
    );    
}

function fake_click(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
        );
    obj.dispatchEvent(ev);
}
/*
 * save html to local
 */ 
function export_raw(name, data) {
   var urlObject = window.URL || window.webkitURL || window;
 
   var export_blob = new Blob([data]);
 
   var save_link = document.createElement("a");
   save_link.href = urlObject.createObjectURL(export_blob);
   save_link.download = name;
   fake_click(save_link);
}
/*
 * fork/clone a fiddle
 */
function forkFiddle(){
    var id = $("#fiddle_id").text();
    window.location.href = '/fiddle/fork?id='+id;
}
/*
 * add a fiddle to favorite list
 */
function favFiddle(){
    var id = $("#fiddle_id").text();
    $.get('/fiddle/collect?id='+id,
      function(data){
        var dataObj = eval("("+data+")");
        if(dataObj.wid) {
            alert('已收藏到个人主页');
        }else{
            if(dataObj.returncode === 'R02')
                alert(dataObj.error);
            else
                alert('已收藏');
        }
      }
    );
}
function clearFiddle(){
    js_editor.setValue('');
    css_editor.setValue('');
    html_editor.setValue('');
    document.getElementById('preview').contentWindow.location.reload(true);
}
/*
 * toggle view mode to expanded or compressed
 */
function expandFiddle(){
}
/*
 * vote up a fiddle for the sake of recommendation
 */
function voteFiddle(){
    var id = $("#fiddle_id").text();
    $.get('/fiddle/vote?id='+id,
      function(data){
        var dataObj = eval("("+data+")");
        if(dataObj.vote) {
            $("#work_vote").addClass('voted');
            $("#work_vote").html('点赞<span class="vote_circle">'+dataObj.vote+'</span>');
        }else{
            if(dataObj.returncode === 'R02')
                alert(dataObj.error);
            else
                alert('点赞失败！');
        }
      }
    );
}

/*
 * beautify the html/js/css codes
 */
function beautify(){
    var js_str = js_editor.getValue();
    if(js_str.indexOf('NO-BEAUTIFY')=== -1 && $('#JS_TYPE').val()==='0'){//only beautify native js, keep babel/coffee/typescript as it is
        js_editor.setValue(js_beautify(js_str));
    }
    var css_str = css_editor.getValue();
    if(css_str.indexOf('NO-BEAUTIFY')=== -1 && $('#CSS_TYPE').val()==='0') {//only beautify css, keep scss as it is
        css_editor.setValue(css_beautify(css_str));
    }
    var html_str = html_editor.getValue();
    if(html_str.indexOf('coffeescript')=== -1 
       && html_str.indexOf('shader')=== -1
       && html_str.indexOf('application/processing')=== -1
       && html_str.indexOf('text/processing')=== -1   
       && html_str.indexOf('text/jsx')=== -1
       && html_str.indexOf('NO-BEAUTIFY')=== -1
       && html_str.indexOf('type="module"')=== -1)
        html_editor.setValue(html_beautify(html_str));
};
function insertAtCaret(myValue) {
    var $t = $(this)[0];
    if (document.selection) {
        this.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        this.focus();
    } else
        if ($t.selectionStart || $t.selectionStart == '0') {
            var startPos = $t.selectionStart;
            var endPos = $t.selectionEnd;
            var scrollTop = $t.scrollTop;
            $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
            this.focus();
            $t.selectionStart = startPos + myValue.length;
            $t.selectionEnd = startPos + myValue.length;
            $t.scrollTop = scrollTop;
        } else {
            this.value += myValue;
            this.focus();
        }
}
// get html code templates
function showMixinItem(mixin_id){
     $.ajax({
        type:'post',
        url:'/fiddle/get-mixin-item',
        data:{id:mixin_id},
        cache:false,
        async:false,
        success:function(data){
            json = JSON.parse(data);
            if(json.html) {
                html_editor.focus();
                var doc = html_editor.getDoc();               
                doc.replaceSelection(json.html);
                //console.log(json.html);
            }
            if(json.css) {
                css_editor.focus();
                var doc = css_editor.getDoc();               
                doc.replaceSelection(json.css);
            }
            if(json.js) {
                js_editor.focus();
                var doc = js_editor.getDoc();               
                doc.replaceSelection(json.js);
            }
            changeShowMixin();
        }
    });
}
function changeShowMixin(){
    if($('#settings-modal-html').css('display') !== 'none'){
        $("#settings-mixin-html").removeClass("open");                        
        $('#settings-modal-html').hide();
    }else{
        $("#settings-mixin-html").addClass("open");
        $('#settings-modal-html').show();
    }
};

$('#sw_feature').click(function(){
    var page_id = 0;
    if($(this).attr('checked')) page_id = 1;
    $.ajax({
        type:       'post',
        url:        '/fiddle/ajax-feature',
        data:       {id: $("#fiddle_id").text(), page_id: page_id},
        success:    function(data){
                        
                    }
    });
});
$('#sw_animate').click(function(){
    var animate = 0;
    if($(this).attr('checked')) animate = 1;
    $.ajax({
        type:       'post',
        url:        '/fiddle/ajax-animate',
        data:       {id: $("#fiddle_id").text(), animate: animate},
        success:    function(data){
                        
                    }
    });
});
/*
 * initialize the home page
 */
$(document).ready(
	function(){
        //init sidebar navigation menus
        //initSidebar();
        initMenu();

        js_editor = CodeMirror.fromTextArea(document.getElementById('code-js'), {         
            mode: 'javascript',
            lineNumbers: true,
            lineWrapping: true,               
            extraKeys: {"Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            tabMode: 'indent',
            theme: 'base16-dark'            
        });
        var css_mode = "css"; 
        if($('#CSS_TYPE').val()==='1') css_mode = "text/x-scss";
        css_editor = CodeMirror.fromTextArea(document.getElementById('code-css'), {
            mode: css_mode,
            lineNumbers: true,
            lineWrapping: true,               
            extraKeys: {"Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            tabMode: 'indent',
            theme: 'base16-dark'   
        });

        html_editor = CodeMirror.fromTextArea(document.getElementById('code-html'), {
            mode: 'htmlmixed',
            lineNumbers: true,
            lineWrapping: true,               
            extraKeys: {"Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            tabMode: 'indent',
            theme: 'base16-dark'       
        });
 
        //add emmet(zen-coding) to codemirror
        emmetCodeMirror(html_editor);
        emmetCodeMirror(css_editor);

        //make the code clean
        beautify();
        
        //auto refresh the code preview, now disabled
        /*  var delay;
            html_editor.on("change", function() {
            clearTimeout(delay);
            delay = setTimeout(updatePreview, 300);
        });*/
        function updatePreview() {
            //load selected framework
            var libs = loadLibs();
            
            //load external resources
            var ex_res = loadResouces();
            
            var previewFrame = document.getElementById('preview');
            var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
            preview.open();
            var html_head_begin = '<!DOCTYPE html><html><head> \
<meta charset="UTF-8"><title>HTML5 Preview Panel<\/title><script src="\/libs\/prefixfree.min.js"><\/script> \
<script src="\/libs\/modernizr.js"><\/script>';
            var jscode = ''+js_editor.getValue();

            if($('#JS_TYPE').val()==='1'){//if is babeljs
                jscode = '<script>' + Babel.transform(jscode, { presets: g_presets }).code + '<\/script>';
            }else if($('#JS_TYPE').val()==='2'){
                jscode = '<script src="/libs/coffeescript.js"></script><script type="text/coffeescript">'+jscode+'<\/script>';
            }else {//else native js
                jscode = '<script>'+jscode+'<\/script>';
            }
            
            var css_codes = css_editor.getValue();
            try{
	            if($('#CSS_TYPE').val()!=='0'){
	            	if(css_codes !== $('#CSS_VALUE').val()){
		    		    $.ajax(
	        	            {
	        	                type:			'post',
	        	                url:			'/fiddle/css-compile',
	        	                data:			{
                                            type:  $('#CSS_TYPE').val(),                                          
                                            value: css_codes
                                        },
	        	                cache:		false,
	        	                async:		false,
	        	                success:		function(data){
	        	                					css_codes = data;
	            	                            }
	        	            }
	        	        );
	            	}else{
	            		css_codes = $('#CSS_VALUE').val();
	            	}
	            }
            }catch(e){

            }
            var csscode = '<style>'+css_codes+'<\/style>';
            var html_head_end = '<\/head>';
            var html_body_begin = '<body>';
            var html_body_end = '<\/body>';
            preview.write(html_head_begin + ex_res + csscode + libs + html_head_end + html_body_begin + html_editor.getValue() + jscode + html_body_end);
            preview.close();
        }
        updatePreview();
            
        $("#work_run").click(
            function(){
                updatePreview();
            }
        );
        $("#settings-pane-js").click(
            function(){
                if($('#settings-modal-js').css('display') !== 'none'){
                    $(this).removeClass("open");                        
                    $('#settings-modal-js').hide();
                }else{
                    $(this).addClass("open");
                    $('#settings-modal-js').show();
                }
            }
        ); 
        $("#settings-pane-css").click(
            function(){
                if($('#settings-modal-css').css('display') !== 'none'){
                    $(this).removeClass("open");                        
                    $('#settings-modal-css').hide();
                }else{
                    $(this).addClass("open");
                    $('#settings-modal-css').show();
                }
            }
        );
        $("#add-resource").click(
            function(){
                var url = $("input[id='external-resource']").val();
                if(isJsCss(url)) {
                    var res_id = rand();
                    var new_res = '<li style="opacity:0" id="external_resource_' + res_id + '">\
<a title="' + url + '" class="filename" href="' + url + '" target="_blank">' + url +'</a> \
<a rel="' + res_id + '" class="button round del" title="删除" onclick="$(this).parent().remove();">- </a></li>';
                    $("#external_resources_list").append(new_res);
                    $("#external_resources_list").show();
                    $("#external_resource_"+res_id).animate({opacity:1},"slow");
                    $("#res-error").hide();
                }else{
                    $("#res-error").show();
                }
                return false;
            }
        );
        $("#help-resource").click(
            function(){
                if($('#res-help').css('display') !== 'none'){            
                    $('#res-help').hide();
                }else{
                    $('#res-help').show();
                }
            }
        );
        $("#work_save").click(
            function(){
                editFiddle();
            }
        );
        $("#work_save_to").click(
            function(){
                downloadFiddle();
            }
        );
        $("#work_vote").click(
            function(){
                voteFiddle();
            }
        );
        $("#work_vote").mouseover(function(){
            $(".voted_list").show();
        });            
        $("#work_fav").click(
            function(){
                favFiddle();
            }
        );
        $("#work_clear").click(
            function(){
                clearFiddle();
            }
        );
        $("#work_brush").click(
            function(){
                beautify();
            }
        );
        
        //keyboard shortcuts
        $(document).bind("keydown",
        	function(e) {
                if(e.which === 69 && e.ctrlKey && e.shiftKey) {//ctrl+shift+e, search on techbrood
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("//techbrood.com?q="+searchText);
                }else if(e.which === 85 && e.ctrlKey && e.shiftKey) {//ctrl+shift+e, search on CanIUse
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("//caniuse.com/#search="+searchText);
                }else if(e.which === 83 && e.ctrlKey && e.shiftKey) {//ctrl+shift+u, search on stackoverflow
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("//stackoverflow.com/search?q="+searchText);
                }else if(e.which === 70 && e.ctrlKey && e.shiftKey) {//ctrl+shift+f, search on mozilla
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("https://developer.mozilla.org/en-US/search?q="+searchText);
                }else if(e.which === 72 && e.ctrlKey && e.shiftKey) {//ctrl+shift+b, search on techbrood
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("//www.techbrood.com/guide?q="+searchText);
                }else if(e.which === 66 && e.ctrlKey && e.shiftKey) {//ctrl+shift+h, search on baidu
                    var selobj = window.getSelection();
                    var searchText = urlencode(selobj.toString());
                    window.open("https://www.baidu.com/s?ie=utf-8&wd="+searchText);
                }else if(e.which === 83 && e.ctrlKey){//CTRL+S
    				e.preventDefault();
                    setTimeout(function() {
                    	editFiddle();
                    }, 10);
                    return false;
    			}else if(e.which === 77 && e.ctrlKey){//CTRL+M
    				e.preventDefault();
                    setTimeout(function() {
                        document.location = '/fiddle/new';
                    }, 10);
                    return false;
    			}else if(e.which === 82 && e.ctrlKey){//CTRL+R
    				e.preventDefault();
                    setTimeout(function() {
                    	updatePreview();
                    }, 10);
                    return false;
    			}
        	}
        );
            
        // function to build the tips(or ad) list
        // args: tips array
        function buildTips(arr) {
            for (i = 0; i < arr.length; i++) {
                var item = "<li data-url="+arr[i]['url']+" data-description="+arr[i]['description']+">";
                $("#spinner").append(item + arr[i]['name'] + "</li>");
            }
        }

        function spinner($element) {
            var words = [];
            var word_url=[];
            var word_description=[];
            var list = $('li', $element);
            list.each(function() {
                words.push($(this).text());
                word_url.push($(this).attr('data-url'));
                word_description.push($(this).attr('data-description'));
            });
            list.remove();

            var $ss = $('.spinner-show');

            var i = 0,
                i_next = 1;

            $('.next em', $ss).text(words[i_next]);
            $ss.width($('.current').width());

            setInterval(function() {
                $ss.addClass('swap');
                i = i_next;
                i_next++;
                if (i_next >= words.length) i_next = 0;
                //$ss.width($('.next em').width());
                setTimeout(function() {
                    $('.next em', $ss).text(words[i_next]);
                    $('.current a', $ss).text(words[i]);
                    $('.current a', $ss).attr('href',word_url[i]);
                    $('.current a', $ss).attr('title',word_description[i]);
                    $ss.removeClass('swap');
                }, 600);
            }, 3800);
        }

        if(tips.length){
            buildTips(tips);
            if ($('#spinner').length) {
                spinner($('#spinner'));
            }
        }
        
        //begin mixin(code templates)
        $("#settings-mixin-html").click(function(){  
            $.ajax({
                type:'post',
                url:'/fiddle/get-mixin-menu',
                cache:false,
                async:false,
                success:function(data){   
                    changeShowMixin();
                    if(data){      
                        $('#search_count').empty();
                        $('.nav__list').html(data);                    
                    }else{
                        $('.nav__list').html('功能开发中，敬请期待...');
                    }
                    
                }
            })
        });
        
        function format(text) {
            return text.replace(/ /g, '').replace(/(<([^>]+)>)/ig, '').toLowerCase();
        }

        var SearchOnList = { //realtime search component
            $LIST: '[data-search-on-list=list]',
            $SEARCH: '[data-search-on-list=search]',
            $LIST_ITEM: '[data-search-on-list=list-item]',
            $COUNTER: '[data-search-on-list=counter]',
            TEMPLATE_EMTPY: '<li class="list-item list-item--disable">No results found</li>',


            init: function($element) {
                this.items = [];
                this.itemsMatched = [];

                this.$element = $element;
                this.$list = this.$element.find(this.$LIST);
                this.$search = this.$element.find(this.$SEARCH);
                this.$counter = this.$element.find(this.$COUNTER);

                this.items = this._getAllItems();
                this.itemsMatched = this.items;

                this._updateCounter();
                this._handleResults();
                this._setEventListeners();
            },

            _setEventListeners: function() {
                this.$search
                    .on('keyup', $.proxy(this._onKeyup, this))
                    .on('query:changed', $.proxy(this._handleQueryChanged, this))
                    .on('query:results:some', $.proxy(this._handleResults, this))
                    .on('query:results:none', $.proxy(this._handleNoResults, this))
            },

            _onKeyup: function() {
                var query = this.$search.val(),
                    previousQuery = this.$search.data('previousQuery', query);

                // TODO: Decide when query actually changed
                if (this._queryChanged()) {
                    this.$search.trigger('query:changed', {
                        query: query,
                        previousQuery: previousQuery
                    });
                }
            },

            _queryChanged: function() {
                var query = this.$search.val();
                if ($.trim(query).length === 0 && this.$search.data('previousQuery') === undefined) {
                    return false;
                }
                return true;
            },

            _handleQueryChanged: function(e, data) {
                this.itemsMatched = this.items.map(function(item) {
                    if (format(item.name).match(format(data.query))) {
                        return {
                            name: item.name,
                            id:item.id,
                            visible: true
                        }
                    }
                    return {
                        name: item.name,
                        id:item.id,
                        visible: false
                    }
                });

                this._render();
                this._updateCounter();
            },

            _handleNoResults: function() {
                this.$list.html(this.TEMPLATE_EMTPY);
            },

            _handleResults: function() {
                this.$list.empty().append(this._renderItemsVisible())
            },

            _someItemsVisible: function() {
                return this.itemsMatched.some(function(item) {
                    return item.visible;
                });
            },

            _render: function() {
                (this._someItemsVisible()) ?
                this.$search.trigger('query:results:some'):
                    this.$search.trigger('query:results:none');
            },

            _updateCounter: function() {
                (this._someItemsVisible()) ?
                this.$counter.text(this._renderItemsVisible().length):
                    this.$counter.text('');
            },

            _getAllItems: function() {
                
                var $items = this.$list.find(this.$LIST_ITEM);
                return $items.map(function() {
                    var $item = $(this);
                    return {
                        name: $item.html(),
                        id:$item.attr('data-id'),
                        visible: true
                    };
                }).toArray();
            },

            _renderItemsVisible: function() {
                var itemInTemplate;
                return this.itemsMatched.sort(function(a, b) {
                    if (a.name < b.name) return -1
                    if (a.name > b.name) return 1;
                    return 0;
                }).reduce(function(items, item) {
                    itemInTemplate = '<li><a href="javascript:void(0);" class="list-item" data-search-on-list="list-item" onclick="showMixinItem('+ item.id+')">' + item.name + '</a></li>';
                    if (item.visible) {
                        items.push(itemInTemplate);
                    }
                    return items;
                }, []);
            }
        };

        window.SearchOnList = SearchOnList;  
        //end mixin
        //begin setting css
        $('#CSS_TYPE_BUTTON').click(
             function(){
                 $("#settings-pane-css").click();
                 $('#CSS_TYPE_SHOW').html($('#CSS_TYPE_SELECT').val());
                 if($('#CSS_TYPE_SELECT').val() === "SCSS"){
                     $('#CSS_TYPE').val('1');
                     $('#btn_compile_css').show();
                 }else if($('#CSS_TYPE_SELECT').val() === "SASS"){
                     $('#CSS_TYPE').val('2');
                     $('#btn_compile_css').show();
                 }else{
                     $('#CSS_TYPE').val('0');
                     $('#btn_compile_css').hide();
                 }
             }
        );
        $('#btn_compile_css').click(            
                function(){       
                    if($('#CSS_CURRENT_MODE').val() === '0'){
                        var css_type = $('#CSS_TYPE').val();
                        var css_value = ''+css_editor.getValue();
                        if(css_type=='1')
                            $('#SCSS_VALUE').val(css_value);
                        else if(css_type=='2')
                            $('#SASS_VALUE').val(css_value);
                        $.ajax(
                        {
                            type:           'post',
                            url:            '/fiddle/css-compile',
                            data:           {
                                type: css_type,
                                value: css_value
                            },
                            cache:      false,
                            async:      false,
                            success:        function(data){
                                $('#CSS_VALUE').val(''+data);
                                css_editor.setOption("mode", ("css"));
                                css_editor.setValue(''+data);
                                css_editor.setOption("readOnly", true);
                                $('#CSS_CURRENT_MODE').val(css_type);
                                $('#BUTTON_DO_CSS_COMPILE').html('恢复');
                            }
                        }
                    );
                    }else {                   
                        if($('#CSS_CURRENT_MODE').val() === '1'){
                            css_editor.setOption("mode", ("text/x-scss"));                    
                            css_editor.setValue($('#SCSS_VALUE').val());
                            css_editor.setOption("readOnly", false);
                        }else if($('#CSS_CURRENT_MODE').val() === '2'){
                            css_editor.setOption("mode", ("text/x-sass"));                    
                            css_editor.setValue($('#SASS_VALUE').val());
                            css_editor.setOption("readOnly", false);
                        }    
                        $('#CSS_CURRENT_MODE').val('0');
                        $('#BUTTON_DO_CSS_COMPILE').html('编译');
                    }
                }
        );
        //end setting sss
        //begin setting js
        $('#JS_TYPE_BUTTON').click(
            function(){
             $("#settings-pane-js").click();
                 var js_seclect =$('#JS_TYPE_SELECT').val();
                 if(js_seclect=='Babel')
                     js_seclect = 'JS('+js_seclect+')';
                 $('#JS_TYPE_SHOW').html(js_seclect);
             if($('#JS_TYPE_SELECT').val() === "Babel"){
                 $('#JS_TYPE').val('1');
                 $('#btn_compile_js').show();
             }else if($('#JS_TYPE_SELECT').val() === "CoffeeScript"){
                 $('#JS_TYPE').val('2');
                 $('#btn_compile_js').hide();
             }else{
                 $('#JS_TYPE').val('0');
                 $('#btn_compile_js').hide();
             }
            }
        );
        $('#btn_compile_js').click(
            function(){
                if($('#JS_CURRENT_MODE').val() === '0'){
                    var babelScripts = js_editor.getValue();
                    $('#BABEL_VALUE').val('' + babelScripts);//backup babel script
                    js_editor.setValue(Babel.transform(babelScripts, { presets: g_presets }).code);
                    js_editor.setOption("readOnly", true);                    
                    $('#JS_CURRENT_MODE').val('1');
                    $('#BUTTON_DO_BABEL_COMPILE').html('恢复');
                }else if($('#JS_CURRENT_MODE').val() === '1'){
                    $('#JS_CURRENT_MODE').val('0');
                    $('#BUTTON_DO_BABEL_COMPILE').html('编译');
                    js_editor.setValue($('#BABEL_VALUE').val());
                    js_editor.setOption("readOnly", false);
                }
            }
        );
        //end setting js        


        //mobile tabs handler   
        $("#embed-nav").find('a').each(function(){  
            //show clicked one
            $(this).on("click", function(){
                $("#embed-nav").find('a').each(function(){//reset tabs
                    $(this).removeClass('active');
                    $("#css-box").hide();
                    $("#js-box").hide();
                    $("#html-box").hide();                
                    $("#result-box").hide();                                
                });
                $(this).addClass('active');//active the clicked tab
                var box_id = $(this).attr("href");
                $(''+box_id).show();

                return false;
            })

        });
        function initMobileTabs() {
            if($("#embed-nav").css("display")!="none"){           
                $("#embed-nav").find('a').each(function(){//show only the active tab
                    var box_id = $(this).attr("href");                
                    if($(this).hasClass('active')){
                        $(''+box_id).show();
                    } else {
                        $(''+box_id).hide();
                    };
                }); 
            } else {//show all tabs
                $("#embed-nav").find('a').each(function(){
                    var box_id = $(this).attr("href");
                    $(''+box_id).show();
                });
            }
        };
        initMobileTabs();

        //init layout
        var $vDrag = $(".v_drag");
        var $hDrag = $(".h_drag");
        $vDrag.sandbox({ minHeight: 0, vDrag: true});
        $hDrag.sandbox({ minHeight: 0, hDrag: true});

        $(window).resize(function () {
            initMobileTabs();
            $vDrag.sandbox("reset");
            $hDrag.sandbox("reset");
        });
        $(window).bind("unload", function () {
            $vDrag.sandbox("reset");
            $hDrag.sandbox("reset");

        });  

        //ad popup window toggle
        $(".adsbygoogle").click(function(e) {
            var $me = $(this),
                width = $me.outerWidth(),
                height = $me.outerHeight(),
                top = $me.position().top,
                left = $me.position().left;

            var len = Math.sqrt(Math.pow(width - e.offsetX, 2) + Math.pow(e.offsetY, 2));

            if (len < 20) {
                $me.hide();
            }
        });              
	}
);