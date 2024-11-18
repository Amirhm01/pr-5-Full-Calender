const ArrMavadList = [
    {
        id: 1, data: 'لباس اتاق عمل', inventory: 5,
    },
    {
        id: 2, data: 'اتاق عمل', inventory: 3,
    },
]

const PackItem = [
    {
        id: 1, title: 'تست', data: [
            { id: 1, title: 'IBUPROFEN(1.0mg/@ml17•ml |Oral )', inventory: 1 },
            { id: 2, title: 'IBUPROFEN(1.0ml |Oral Suspension)', inventory: 4 },
            { id: 3, title: '(1.0mg/@ml17•ml |Oral Suspension)', inventory: 2 },
        ],
    },
    {
        id: 2, title: 'لیزیک چشم', data: [
            { id: 1, title: 'IBUPROFEN)', inventory: 3 },
            { id: 2, title: '|Oral Suspension)', inventory: 7 },
            // { id: 3, title: '(1.0mg/@ml17•ml)', inventory: 2 },
        ],
    },
]


$(document).ready(function () {

    $('.select2').select2({
    });

    $('#test-select').select2({

    });
    $('#mavad-select').select2({
        placeholder: 'مواد مصرفی'
    });
    $('#mavad2-select').select2();


    // MAVAD LIST


    ArrMavadList.forEach(ArrMavadList => {
        const htmlMavadList =
            `   <div class="box-information ">
        <p class="title-box inbox-text" tags="` + ArrMavadList.id + `">` + ArrMavadList.data + `</p>
        <div class="counter">
            <i class="fa fa-plus plus" aria-hidden="true" id="` + ArrMavadList.id + `" tags="` + ArrMavadList.id + `"></i>
            <p class="counter-number" tags="` + ArrMavadList.id + `">` + ArrMavadList.inventory + `</p>
            <i class="fa fa-minus minus" aria-hidden="true" id="" tags="` + ArrMavadList.id + `"></i>
        </div>`
        $('.body-list').append(htmlMavadList)
    });
    // MAVAD LIST


    PackItem.forEach(PackItem => {
        let temp = '';

        PackItem['data'].forEach(data => {

            let bodyidcheckbox = `checkbox-` + PackItem.id + data.id;
            let bodycheckboxclass = `childcheck-` + PackItem.id;

            temp += `                        
            <div class="pack-info">
            <div class="form-check inbox-check">
                <input data-parent-id="`+ PackItem.id + `" class="form-check-input ` + bodycheckboxclass + `" name="bodycheckboxname"
                 type="checkbox" id="` + bodyidcheckbox + `" checked>
            </div>
            <p class="title-box inbox-text " tags="` + PackItem.id + data.id + `">` + data.title + `
            </p>
            <div class="counter">
                <i class="fa fa-plus plus  inventory`+ PackItem.id + data.id + `" aria-hidden="true" tags="` + PackItem.id + data.id + `" id="plus` + PackItem.id + data.id + `"></i>
                <p class="counter-number inventory`+ PackItem.id + data.id + `" tags="` + PackItem.id + data.id + `">` + data.inventory + `</p>
                <i class="fa fa-minus minus inventory`+ PackItem.id + data.id + `" aria-hidden="true" tags="` + PackItem.id + data.id + `" id="minum` + PackItem.id + data.id + `"></i>
            </div>`});




        const htmlPackItem =
            `                        
            <div class="boxes col-12 px-0">
            <div class="boxtitle col-12" dir="rtl">
                <div class="form-check">
                    <input class="form-check-input parent-checkbox" type="checkbox"  name="titleChecked" checked id="`+ PackItem.id + `">
                </div>
                <p class="title-box">`+ PackItem.title + `</p>

            </div>
            `+ temp + `
            
        </div>`
        $('.pack-item').append(htmlPackItem)

    });






    // checkbox
    $(".parent-checkbox").on('change', function () {
        let id = $(this).attr('id');
        if ($(".parent-checkbox[id=" + id + "]").prop("checked")) {
            $(".pack-info input[data-parent-id=" + id + "]").prop('checked', true);
        }
        else {
            $(".pack-info input[data-parent-id=" + id + "]").prop('checked', false);
        }
    });



    $(".pack-info input").on('change', function () {
        let dataparentid = $(this).attr('data-parent-id');
        let Allcheckbox = $(".pack-info input[data-parent-id=" + dataparentid + "]").length;
        let Allcheckboxtrue = $(".pack-info input[data-parent-id=" + dataparentid + "]:checked").length;;
        if (Allcheckbox == Allcheckboxtrue) {
            $(".parent-checkbox[id=" + dataparentid + "]").prop('checked', true);

        }
        else {
            $(".parent-checkbox[id=" + dataparentid + "]").prop('checked', false);

        }
    })
    // checkbox
    // plus & minus
    $(".plus").on('click', function () {
        let tags = $(this).attr('tags');
        let inventory = $(".counter-number[tags=" + tags + "]").text();
        newinventory = Number(inventory) + 1;
        $(".counter-number[tags=" + tags + "]").text(newinventory)
        if (newinventory > 0) {
            $(".inbox-text[tags=" + tags + "]").css('text-decoration', 'none');
        }
    });

    $(".minus").on('click', function () {
        let tags = $(this).attr('tags');
        let inventory = $(".counter-number[tags=" + tags + "]").text();
        if (inventory >= 0) {
            if (inventory > 0) {
                newinventory = Number(inventory) - 1;
            }
            if (newinventory == 0) {
                $(".inbox-text[tags=" + tags + "]").css('text-decoration', 'line-through');
            }

        }




        $(".counter-number[tags=" + tags + "]").text(newinventory)
    });


    // plus & minus



});
















