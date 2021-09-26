function correct() {
    let count = 0;
    count = count + updatesRadioClass('1_1', '1_1', 'option1');
    count = count + updatesRadioClass('1_2', '1_2', 'option2');
    count = count + updatesRadioClass('1_3', '1_3', 'option1');
    count = count + updatesRadioClass('1_4', '1_4', 'option3');
    count = count + updatesRadioClass('1_5', '1_5', 'option2');
    count = count + updatesRadioClass('1_6', '1_6', 'option1');
    count = count + updatesRadioClass('1_7', '1_7', 'option2');
    count = count + updatesCheckClass('2_1', 'inlineCheckbox_2_1', false);
    count = count + updatesCheckClass('2_2', 'inlineCheckbox_2_2', true);
    count = count + updatesCheckClass('2_3', 'inlineCheckbox_2_3', true);
    count = count + updatesCheckClass('2_4', 'inlineCheckbox_2_4', true);
    count = count + updatesCheckClass('2_5', 'inlineCheckbox_2_5', true);
    count = count + updatesCheckClass('2_6', 'inlineCheckbox_2_6', true);
    count = count + updatesRadioClass('3_1', '3_1', 'option3');
    count = count + updatesRadioClass('3_2', '3_2', 'option3');
    count = count + updatesRadioClass('3_3', '3_3', 'option1');
    count = count + updatesRadioClass('3_4', '3_4', 'option2');
    count = count + updatesRadioClass('3_5', '3_5', 'option3');
    count = count + updatesRadioClass('3_6', '3_6', 'option1');
    count = count + updatesRadioClass('3_7', '3_7', 'option2');
    let message = "";
    $("#firework").css("display", "none");
    if (count > 0) message = "Tu as " + count + " bonnes réponses sur 20. Il est temps de réviser.";
    if (count > 10) message = "Tu as " + count + " bonnes réponses sur 20. Tu peux encore t'améliorer.";
    if (count > 15) message = "C'est bien ! Tu as " + count + " bonnes réponses sur 20 !!!";
    if (count == 20) {
        message = "Bravo 🎉 🎉 🎉 tu as 20 bonnes réponses sur 20, c'est parfait !!!";
        $("#firework").css("display", "block");
    }
    $("#result").text(message);
}
function updatesRadioClass(id, radioName, value) {
    $("#" + id).removeClass('good-answer');
    $("#" + id).removeClass('bad-answer');
    $("#" + id).addClass($("input[name=" + radioName + "]:checked", "#myForm").val() == value ? 'good-answer' : 'bad-answer');
    return $("input[name=" + radioName + "]:checked", "#myForm").val() == value ? 1 : 0;
}

function updatesCheckClass(idSection, idCheckbox, answer) {
    $("#" + idSection).removeClass('good-answer');
    $("#" + idSection).removeClass('bad-answer');
    $("#" + idSection).addClass($("#" + idCheckbox).prop("checked") == answer ? 'good-answer' : 'bad-answer');
    return $("#" + idCheckbox).prop("checked") == answer ? 1 : 0;
}