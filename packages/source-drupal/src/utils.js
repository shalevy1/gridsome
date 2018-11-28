// https://gist.github.com/mathewbyrne/1280286
const slugify = (text) => {
  return text.toString()
    .replace(/[A-Z]/g, s => "-" + s)
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')
    .toLowerCase();            // Trim - from end of text
}

const toPascalCase = (text) => {
  return text.match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
}

const cullByWordCount = (str) => {
  if (!str) return () => ''
  
  return (wordCount) => {
    let strArray = str.split(' ')
    let innerWordCount = (strArray.length < wordCount) ? strArray.length : wordCount


    return strArray.slice(0, innerWordCount).join(' ')
  }
}

module.exports = {
  slugify,
  toPascalCase,
  cullByWordCount
}