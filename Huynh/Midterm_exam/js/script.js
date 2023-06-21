var numToDo;

function valueAllDefault() {
    numToDo = $('.to-do').length;
    
    for (let i = 1; i <= numToDo; i++) {
        $('.to-do').eq(i-1).addClass(`to-do-${i}`);
        $(`.to-do-${i} label`).attr('for', `toDo${i}`);
        $(`.to-do-${i} input`).attr('id', `toDo${i}`);
        $(`.to-do-${i} input`).attr('onchange', `completeToDo(${i})`);
        $(`.to-do-${i} .delete-to-do`).attr('onclick', `removeToDo(${i})`);
    }
}

function resetAllValue() {
    for (let i = 1; i <= numToDo; i++) {
        $(`.to-do-${i} .delete-to-do`).removeAttr('onclick');
        $(`.to-do-${i} input`).removeAttr('onchange');
        $(`.to-do-${i} label`).removeAttr('for');
        $(`.to-do-${i} input`).removeAttr('id');
        $(`.to-do-${i}`).removeClass(`to-do-${i}`);
    }
}

$(document).ready(function () {
    valueAllDefault();
})

$('.add-to-do').on('click', function () {
    resetAllValue();
    let parentlist = $('.to-do-list');
    let inputToDo = $('.text-to-do');
    let newToDo = $(`
            <div class="to-do">
                <div class="d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" name="toDo">
                    <label>${$('.text-to-do').val()}</label>    
                </div>
                <button class="delete-to-do btn btn-light">xóa</button>
            </div>
        `);
    if (inputToDo.val() !== undefined) {
        newToDo.prependTo(parentlist);
    }
    $('.text-to-do').val('');
    valueAllDefault();
})

function completeToDo(num) {
    if ($(`.to-do-${num} input`).is(':checked')) {
        $(`.to-do-${num} label`).css('text-decoration', 'line-through');
    } else {
        $(`.to-do-${num} label`).css('text-decoration', 'none');
    }
}

function removeToDo(num) {
    $(`.to-do-${num}`).remove();
    resetAllValue();
    valueAllDefault();
}