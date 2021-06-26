onload = function () {
    document.getElementById('c-num').oninput = function () {
        this.value = cc_format(this.value)
    }
    document.getElementById('auth-numbers').oninput = function () {
        this.value = auths_format(this.value)
    }

    $(document).ready(function () {
        var arrow = document.getElementById('arrow')
        $('#left-sidebarCollapse').on('click', function () {
            $('#left-sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            if (arrow.className == 'fa fa-chevron-left')
                arrow.className = 'fa fa-chevron-right';
            else
                arrow.className = 'fa fa-chevron-left';
        });

    });

}

function DDMMYYYY(value, event) {
    let newValue = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');

    const dayOrMonth = (index) => index % 2 === 1 && index < 4;

    // on delete key.  
    if (!event.data) {
        return value;
    }

    return newValue.split('').map((v, i) => dayOrMonth(i) ? v + '/' : v).join('');
}

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

function auths_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{6,160}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i = 0, len = match.length; i < len; i += 6) {
        parts.push(match.substring(i, i + 6))
    }
    if (parts.length) {
        return parts.join(',')
    } else {
        return value
    }
}

function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}