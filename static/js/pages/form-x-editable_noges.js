$(function(value){

    //ajax mocks
    
   
    
    function log(settings, response) {
            var s = [], str;
            s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
            for(var a in settings.data) {
                if(settings.data[a] && typeof settings.data[a] === 'object') {
                    str = [];
                    for(var j in settings.data[a]) {str.push(j+': "'+settings.data[a][j]+'"');}
                    str = '{ '+str.join(', ')+' }';
                } else {
                    str = '"'+settings.data[a]+'"';
                }
                s.push(a + ' = ' + str);
            }
            s.push('RESPONSE: status = ' + response.status);

            if(response.responseText) {
                if($.isArray(response.responseText)) {
                    s.push('[');
                    $.each(response.responseText, function(i, v){
                       s.push('{value: ' + v.value+', text: "'+v.text+'"}');
                    }); 
                    s.push(']');
                } else {
                   s.push($.trim(response.responseText));
                }
            }
            s.push('--------------------------------------\n');
            $('#console').val(s.join('\n') + $('#console').val());
    }    
  
   //defaults
   $.fn.editable.defaults.url = '/post'; 

            var c = window.location.href.match(/c=inline/i) ? 'inline' : 'popup';
            $.fn.editable.defaults.mode = c === 'inline' ? 'inline' : 'popup';

                $('#c').val(c);
    //enable / disable
   $('#enable').click(function() {
       $('#user .editable').editable('toggleDisabled');
   });    
    
    //editables 
    $('#usernamee').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'username',
           title: 'Enter username'
    });
    
    $('#firstname').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
       
// INGRESAR TODAS LAS ESPECIALIDADES
    
    $('#CMF_ene').editable();
    $('#CMF_feb').editable();
    $('#CMF_mar').editable();
    $('#CMF_abr').editable();
    $('#CMF_may').editable();
    $('#CMF_jun').editable();
    $('#CMF_jul').editable();
    $('#CMF_ago').editable();
    $('#CMF_sep').editable();
    $('#CMF_oct').editable();
    $('#CMF_nov').editable();
    $('#CMF_dic').editable();

    $('#CMF\\ Infantil_ene').editable();
    $('#CMF\\ Infantil_feb').editable();
    $('#CMF\\ Infantil_mar').editable();
    $('#CMF\\ Infantil_abr').editable();
    $('#CMF\\ Infantil_may').editable();
    $('#CMF\\ Infantil_jun').editable();
    $('#CMF\\ Infantil_jul').editable();
    $('#CMF\\ Infantil_ago').editable();
    $('#CMF\\ Infantil_sep').editable();
    $('#CMF\\ Infantil_oct').editable();
    $('#CMF\\ Infantil_nov').editable();
    $('#CMF\\ Infantil_dic').editable();

    $('#Cirugia\\ General_ene').editable();
    $('#Cirugia\\ General_feb').editable();
    $('#Cirugia\\ General_mar').editable();
    $('#Cirugia\\ General_abr').editable();
    $('#Cirugia\\ General_may').editable();
    $('#Cirugia\\ General_jun').editable();
    $('#Cirugia\\ General_jul').editable();
    $('#Cirugia\\ General_ago').editable();
    $('#Cirugia\\ General_sep').editable();
    $('#Cirugia\\ General_oct').editable();
    $('#Cirugia\\ General_nov').editable();
    $('#Cirugia\\ General_dic').editable();

    $('#Cirugia\\ Vascular_ene').editable();
    $('#Cirugia\\ Vascular_feb').editable();
    $('#Cirugia\\ Vascular_mar').editable();
    $('#Cirugia\\ Vascular_abr').editable();
    $('#Cirugia\\ Vascular_may').editable();
    $('#Cirugia\\ Vascular_jun').editable();
    $('#Cirugia\\ Vascular_jul').editable();
    $('#Cirugia\\ Vascular_ago').editable();
    $('#Cirugia\\ Vascular_sep').editable();
    $('#Cirugia\\ Vascular_oct').editable();
    $('#Cirugia\\ Vascular_nov').editable();
    $('#Cirugia\\ Vascular_dic').editable();


    $('#Cirugia\\ Infantil_ene').editable();
    $('#Cirugia\\ Infantil_feb').editable();
    $('#Cirugia\\ Infantil_mar').editable();
    $('#Cirugia\\ Infantil_abr').editable();
    $('#Cirugia\\ Infantil_may').editable();
    $('#Cirugia\\ Infantil_jun').editable();
    $('#Cirugia\\ Infantil_jul').editable();
    $('#Cirugia\\ Infantil_ago').editable();
    $('#Cirugia\\ Infantil_sep').editable();
    $('#Cirugia\\ Infantil_oct').editable();
    $('#Cirugia\\ Infantil_nov').editable();
    $('#Cirugia\\ Infantil_dic').editable();


    $('#Ginecolog??a_ene').editable();
    $('#Ginecolog??a_feb').editable();
    $('#Ginecolog??a_mar').editable();
    $('#Ginecolog??a_abr').editable();
    $('#Ginecolog??a_may').editable();
    $('#Ginecolog??a_jun').editable();
    $('#Ginecolog??a_jul').editable();
    $('#Ginecolog??a_ago').editable();
    $('#Ginecolog??a_sep').editable();
    $('#Ginecolog??a_oct').editable();
    $('#Ginecolog??a_nov').editable();
    $('#Ginecolog??a_dic').editable();    

    
    $('#Oftalmolog??a_ene').editable();
    $('#Oftalmolog??a_feb').editable();
    $('#Oftalmolog??a_mar').editable();
    $('#Oftalmolog??a_abr').editable();
    $('#Oftalmolog??a_may').editable();
    $('#Oftalmolog??a_jun').editable();
    $('#Oftalmolog??a_jul').editable();
    $('#Oftalmolog??a_ago').editable();
    $('#Oftalmolog??a_sep').editable();
    $('#Oftalmolog??a_oct').editable();
    $('#Oftalmolog??a_nov').editable();
    $('#Oftalmolog??a_dic').editable();

    $('#Obstetricia_ene').editable();
    $('#Obstetricia_feb').editable();
    $('#Obstetricia_mar').editable();
    $('#Obstetricia_abr').editable();
    $('#Obstetricia_may').editable();
    $('#Obstetricia_jun').editable();
    $('#Obstetricia_jul').editable();
    $('#Obstetricia_ago').editable();
    $('#Obstetricia_sep').editable();
    $('#Obstetricia_oct').editable();
    $('#Obstetricia_nov').editable();
    $('#Obstetricia_dic').editable(); 

    $('#Otorrinolaringolog??a\\ Infantil_ene').editable();
    $('#Otorrinolaringolog??a\\ Infantil_feb').editable();
    $('#Otorrinolaringolog??a\\ Infantil_mar').editable();
    $('#Otorrinolaringolog??a\\ Infantil_abr').editable();
    $('#Otorrinolaringolog??a\\ Infantil_may').editable();
    $('#Otorrinolaringolog??a\\ Infantil_jun').editable();
    $('#Otorrinolaringolog??a\\ Infantil_jul').editable();
    $('#Otorrinolaringolog??a\\ Infantil_ago').editable();
    $('#Otorrinolaringolog??a\\ Infantil_sep').editable();
    $('#Otorrinolaringolog??a\\ Infantil_oct').editable();
    $('#Otorrinolaringolog??a\\ Infantil_nov').editable();
    $('#Otorrinolaringolog??a\\ Infantil_dic').editable(); 

    $('#TMT\\ Infantil_ene').editable();
    $('#TMT\\ Infantil_feb').editable();
    $('#TMT\\ Infantil_mar').editable();
    $('#TMT\\ Infantil_abr').editable();
    $('#TMT\\ Infantil_may').editable();
    $('#TMT\\ Infantil_jun').editable();
    $('#TMT\\ Infantil_jul').editable();
    $('#TMT\\ Infantil_ago').editable();
    $('#TMT\\ Infantil_sep').editable();
    $('#TMT\\ Infantil_oct').editable();
    $('#TMT\\ Infantil_nov').editable();
    $('#TMT\\ Infantil_dic').editable();
    
    $('#Traumatolog??a_ene').editable();
    $('#Traumatolog??a_feb').editable();
    $('#Traumatolog??a_mar').editable();
    $('#Traumatolog??a_abr').editable();
    $('#Traumatolog??a_may').editable();
    $('#Traumatolog??a_jun').editable();
    $('#Traumatolog??a_jul').editable();
    $('#Traumatolog??a_ago').editable();
    $('#Traumatolog??a_sep').editable();
    $('#Traumatolog??a_oct').editable();
    $('#Traumatolog??a_nov').editable();
    $('#Traumatolog??a_dic').editable(); 

    $('#Urolog??a_ene').editable();
    $('#Urolog??a_feb').editable();
    $('#Urolog??a_mar').editable();
    $('#Urolog??a_abr').editable();
    $('#Urolog??a_may').editable();
    $('#Urolog??a_jun').editable();
    $('#Urolog??a_jul').editable();
    $('#Urolog??a_ago').editable();
    $('#Urolog??a_sep').editable();
    $('#Urolog??a_oct').editable();
    $('#Urolog??a_nov').editable();
    $('#Urolog??a_dic').editable(); 

    $('#Urolog??a\\ Infantil_ene').editable();
    $('#Urolog??a\\ Infantil_feb').editable();
    $('#Urolog??a\\ Infantil_mar').editable();
    $('#Urolog??a\\ Infantil_abr').editable();
    $('#Urolog??a\\ Infantil_may').editable();
    $('#Urolog??a\\ Infantil_jun').editable();
    $('#Urolog??a\\ Infantil_jul').editable();
    $('#Urolog??a\\ Infantil_ago').editable();
    $('#Urolog??a\\ Infantil_sep').editable();
    $('#Urolog??a\\ Infantil_oct').editable();
    $('#Urolog??a\\ Infantil_nov').editable();
    $('#Urolog??a\\ Infantil_dic').editable(); 
    



    // Seg??n horas.
    $('#OcupadasVeinte_ene').editable(); 
    $('#OcupadasVeinte_feb').editable(); 
    $('#OcupadasVeinte_mar').editable(); 
    $('#OcupadasVeinte_abr').editable(); 
    $('#OcupadasVeinte_may').editable(); 
    $('#OcupadasVeinte_jun').editable(); 
    $('#OcupadasVeinte_jul').editable(); 
    $('#OcupadasVeinte_ago').editable(); 
    $('#OcupadasVeinte_sep').editable(); 
    $('#OcupadasVeinte_oct').editable(); 
    $('#OcupadasVeinte_nov').editable(); 
    $('#OcupadasVeinte_dic').editable(); 
    $('#OcupadasVeinte_total').editable(); 


    $('#DisponiblesVeinte_ene').editable(); 
    $('#DisponiblesVeinte_feb').editable(); 
    $('#DisponiblesVeinte_mar').editable(); 
    $('#DisponiblesVeinte_abr').editable(); 
    $('#DisponiblesVeinte_may').editable(); 
    $('#DisponiblesVeinte_jun').editable(); 
    $('#DisponiblesVeinte_jul').editable(); 
    $('#DisponiblesVeinte_ago').editable(); 
    $('#DisponiblesVeinte_sep').editable(); 
    $('#DisponiblesVeinte_oct').editable(); 
    $('#DisponiblesVeinte_nov').editable(); 
    $('#DisponiblesVeinte_dic').editable(); 
    $('#DisponiblesVeinte_total').editable(); 


    $('#totVeinte_ene').editable(); 
    $('#totVeinte_feb').editable(); 
    $('#totVeinte_mar').editable(); 
    $('#totVeinte_abr').editable(); 
    $('#totVeinte_may').editable(); 
    $('#totVeinte_jun').editable(); 
    $('#totVeinte_jul').editable(); 
    $('#totVeinte_ago').editable(); 
    $('#totVeinte_sep').editable(); 
    $('#totVeinte_oct').editable(); 
    $('#totVeinte_nov').editable(); 
    $('#totVeinte_dic').editable(); 
    $('#totVeinte_total').editable(); 

    $('#OcupadasVentiuno_ene').editable(); 
    $('#OcupadasVentiuno_feb').editable(); 
    $('#OcupadasVentiuno_mar').editable(); 
    $('#OcupadasVentiuno_abr').editable(); 
    $('#OcupadasVentiuno_may').editable(); 
    $('#OcupadasVentiuno_jun').editable(); 
    $('#OcupadasVentiuno_jul').editable(); 
    $('#OcupadasVentiuno_ago').editable(); 
    $('#OcupadasVentiuno_sep').editable(); 
    $('#OcupadasVentiuno_oct').editable(); 
    $('#OcupadasVentiuno_nov').editable(); 
    $('#OcupadasVentiuno_dic').editable(); 
    $('#OcupadasVentiuno_total').editable(); 


    $('#DisponiblesVentiuno_ene').editable(); 
    $('#DisponiblesVentiuno_feb').editable(); 
    $('#DisponiblesVentiuno_mar').editable(); 
    $('#DisponiblesVentiuno_abr').editable(); 
    $('#DisponiblesVentiuno_may').editable(); 
    $('#DisponiblesVentiuno_jun').editable(); 
    $('#DisponiblesVentiuno_jul').editable(); 
    $('#DisponiblesVentiuno_ago').editable(); 
    $('#DisponiblesVentiuno_sep').editable(); 
    $('#DisponiblesVentiuno_oct').editable(); 
    $('#DisponiblesVentiuno_nov').editable(); 
    $('#DisponiblesVentiuno_dic').editable(); 
    $('#DisponiblesVentiuno_total').editable(); 


    $('#totVentiuno_ene').editable(); 
    $('#totVentiuno_feb').editable(); 
    $('#totVentiuno_mar').editable(); 
    $('#totVentiuno_abr').editable(); 
    $('#totVentiuno_may').editable(); 
    $('#totVentiuno_jun').editable(); 
    $('#totVentiuno_jul').editable(); 
    $('#totVentiuno_ago').editable(); 
    $('#totVentiuno_sep').editable(); 
    $('#totVentiuno_oct').editable(); 
    $('#totVentiuno_nov').editable(); 
    $('#totVentiuno_dic').editable(); 
    $('#totVentiuno_total').editable(); 
   $('#user .editable').on('hidden', function(e, reason){
        if(reason === 'save' || reason === 'nochange') {
            var $next = $(this).closest('tr').next().find('.editable');
            if($('#autoopen').is(':checked')) {
                setTimeout(function() {
                    $next.editable('show');
                }, 300); 
            } else {
                $next.focus();
            } 
        }
   });
});