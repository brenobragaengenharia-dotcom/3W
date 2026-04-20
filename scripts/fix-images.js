const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '../lib/mock-data.js');
let code = fs.readFileSync(mockDataPath, 'utf8');

// Map: old imagem value → new verified imagem value
const fixes = {
  // HQs novas (IDs verificados pelo Open Library)
  "'https://covers.openlibrary.org/b/isbn/9781401238964-L.jpg'": "'https://covers.openlibrary.org/b/id/11571982-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401232597-L.jpg'": "'https://covers.openlibrary.org/b/id/798282-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401207526-L.jpg'": "'https://covers.openlibrary.org/b/id/749311-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401208417-L.jpg'": "'https://covers.openlibrary.org/b/id/12293384-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401284770-L.jpg'": "'https://covers.openlibrary.org/b/id/13500635-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781563897627-L.jpg'": "'https://covers.openlibrary.org/b/id/877104-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401204655-L.jpg'": "'https://covers.openlibrary.org/b/id/749102-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781401232498-L.jpg'": "'https://covers.openlibrary.org/b/id/6666053-L.jpg'",
  "'https://covers.openlibrary.org/b/id/7861363-L.jpg'":          "'https://covers.openlibrary.org/b/isbn/9781401234973-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785110828-L.jpg'":  "'https://covers.openlibrary.org/b/id/535727-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785166726-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9780785165416-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785168119-L.jpg'":  "'https://covers.openlibrary.org/b/id/8459964-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785120841-L.jpg'":  "'https://covers.openlibrary.org/b/id/8459565-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785140375-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9780785189497-L.jpg'",
  "'https://covers.openlibrary.org/b/id/12204614-L.jpg'":         "'https://covers.openlibrary.org/b/id/12649895-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780785184515-L.jpg'":  "'https://covers.openlibrary.org/b/id/7474172-L.jpg'",
  "'https://covers.openlibrary.org/b/id/10093240-L.jpg'":         "'https://covers.openlibrary.org/b/isbn/9780785121541-L.jpg'",
  "'https://covers.openlibrary.org/b/id/11884024-L.jpg'":         "'https://covers.openlibrary.org/b/id/14703644-L.jpg'",
  // Mangás novos
  "'https://covers.openlibrary.org/b/isbn/9781974709939-L.jpg'":  "'https://covers.openlibrary.org/b/id/12794650-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781591167532-L.jpg'":  "'https://covers.openlibrary.org/b/id/863552-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781569319208-L.jpg'":  "'https://covers.openlibrary.org/b/id/14650976-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781421587189-L.jpg'":  "'https://covers.openlibrary.org/b/id/14624686-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780345501332-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9781612620862-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781612624204-L.jpg'":  "'https://covers.openlibrary.org/b/id/15135694-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781974717965-L.jpg'":  "'https://covers.openlibrary.org/b/id/14582895-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781593070205-L.jpg'":  "'https://covers.openlibrary.org/b/id/14857363-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781506721118-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9781506700915-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781421592114-L.jpg'":  "'https://covers.openlibrary.org/b/id/10152424-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781421540320-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9781427815232-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781591163329-L.jpg'":  "'https://covers.openlibrary.org/b/id/1041494-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781591161493-L.jpg'":  "'https://covers.openlibrary.org/b/id/1813482-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781591162070-L.jpg'":  "'https://covers.openlibrary.org/b/id/2806278-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781569319147-L.jpg'":  "'https://covers.openlibrary.org/b/id/813533-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780316376815-L.jpg'":  "'https://covers.openlibrary.org/b/id/8402710-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9781974725243-L.jpg'":  "'https://covers.openlibrary.org/b/id/12727258-L.jpg'",
  "'https://covers.openlibrary.org/b/isbn/9780316259361-L.jpg'":  "'https://covers.openlibrary.org/b/isbn/9780316455199-L.jpg'",
};

let count = 0;
for (const [oldVal, newVal] of Object.entries(fixes)) {
  if (code.includes(oldVal)) {
    code = code.split(oldVal).join(newVal);
    count++;
    console.log('OK:', oldVal.substring(0, 60), '→', newVal.substring(0, 60));
  } else {
    console.log('NAO ENCONTRADO:', oldVal.substring(0, 60));
  }
}

fs.writeFileSync(mockDataPath, code, 'utf8');
console.log('\nTotal corrigidos:', count);
