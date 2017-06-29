var listOfAllowedTags = [
   { opening: 'b',          openingRtf: '{\\b',                closing: '/b',          closingRtf: '}' },
   { opening: 'br',         openingRtf: ' \\line',             closing: '/br',         closingRtf: '\\line ' },
   { opening: 'center',     openingRtf: '{\\pard\\qr',         closing: '/center',     closingRtf: '\\par}' },
   { opening: 'div',        openingRtf: '{\\pard',             closing: '/div',        closingRtf: '\\sb70 \\par}' },
   { opening: 'font',       openingRtf: '{',                   closing: '/font',       closingRtf: '}' },
   { opening: 'h1',         openingRtf: '{\\pard',             closing: '/h1',         closingRtf: '\\sb70 \\par}' },
   { opening: 'h2',         openingRtf: '{\\pard',             closing: '/h2',         closingRtf: '\\sb70 \\par}' },
   { opening: 'h3',         openingRtf: '{\\pard',             closing: '/h3',         closingRtf: '\\sb70 \\par}' },
   { opening: 'h4',         openingRtf: '{\\pard',             closing: '/h4',         closingRtf: '\\sb70 \\par}' },
   { opening: 'h5',         openingRtf: '{\\pard',             closing: '/h5',         closingRtf: '\\sb70 \\par}' },
   { opening: 'h6',         openingRtf: '{\\pard',             closing: '/h6',         closingRtf: '\\sb70 \\par}' },
   { opening: 'i',          openingRtf: '{\\i',                closing: '/i',          closingRtf: '}' },
   { opening: 'li',         openingRtf: '{\\pntext\\tab}',     closing: '/li',         closingRtf: '\\par' },
   { opening: 'p',          openingRtf: '{\\pard',             closing: '/p',          closingRtf: '\\sb70 \\par}' },
   { opening: 'ol',         openingRtf: '{{\\*\\pn\\pnlvlbody\\pnf0\\pnindent0\\pnstart1\\pndec{\\pntxta. }}\\fi-360\\li720\\sa200\\sl276\\slmult1',  closing: '/ol',   closingRtf: '}' },
   { opening: 's',          openingRtf: '{\\strike',           closing: '/s',          closingRtf: '}' },
   { opening: 'span',       openingRtf: '{',                   closing: '/span',       closingRtf: '}' },
   { opening: 'sub',        openingRtf: '{\\sub',              closing: '/sub',        closingRtf: '}' },
   { opening: 'sup',        openingRtf: '{\\super',            closing: '/sup',        closingRtf: '}' },
   { opening: 'strong',     openingRtf: '{\\b',                closing: '/strong',     closingRtf: '}' },
   { opening: 'table',      openingRtf: '{',                   closing: '/table',      closingRtf: '}' },
   { opening: 'td',         openingRtf: '{\\pard\\intbl\\qc',  closing: '/td',         closingRtf: '\\cell}' },
   { opening: 'th',         openingRtf: '{\\pard\\intbl\\qc',  closing: '/th',         closingRtf: '\\cell}' },
   { opening: 'tr',         openingRtf: '{\\trowd\\trgaph0',   closing: '/tr',         closingRtf: '\\row}' },
   { opening: 'u',          openingRtf: '{\\ul',               closing: '/u',          closingRtf: '}' },
   { opening: 'ul',         openingRtf: '{{\\*\\pn\\pnlvlblt\\pnf1\\pnindent0{\\pntxtb\\\'B7}}\\fi-360\\li720\\sa200\\sl276\\slmult1\\lang22\\f0\\fs22',  closing: '/ul',   closingRtf: '}' }
];

class AllowedTags {
  static getRtfReferenceTag(tagName) {
    tagName = tagName.toLowerCase();
    for (let i = 0; i < listOfAllowedTags.length; i++) {
      if (listOfAllowedTags[i].opening == tagName)
          return listOfAllowedTags[i].openingRtf;
      if (listOfAllowedTags[i].closing == tagName)
        return listOfAllowedTags[i].closingRtf;
    }
    return '';
  }
}
module.exports = AllowedTags;