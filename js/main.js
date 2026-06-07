'use strict';

document.addEventListener('DOMContentLoaded', function()
{
    const emBottom = document.getElementById('useless-info').firstChild
    const emTop = document.getElementById('em')

    const em = emBottom.nodeValue
        .replace(new RegExp('a t'), '')
        .replaceAll(new RegExp('[e]', 'g'), '')
        .replaceAll(new RegExp('[lx]', 'g'), '')
        .replace('!', '')
        .replace(' ', '')
        .replace(' ', '_')
        .replace(' ', '')
        .replace('tv', '')
        .replace(' ', '')
        .replace(' ', '@')
        .replaceAll(' ', '.')
        .replace('ouija', 'proton')
        .concat('me')
        .replace('nant', 'ente')

    emBottom.nodeValue = em

    emTop.textContent = 'email'
    emTop.href = `mailto:${em}`
})
