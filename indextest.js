var cl = require('./node-clucene').CLucene;
var lucene = new cl.Lucene();
var doc = new cl.Document();
var docId = '1';
//doc.addField('name', 'Eric Jennings', cl.STORE_YES|cl.INDEX_TOKENIZED);
//doc.addField('timestamp', 'Eric Jennings', cl.STORE_YES|cl.INDEX_UNTOKENIZED);


function addDoc(docId, doc){
  lucene.addDocument(docId, doc, './index', function(err, indexTime) {
          if (err) {
                  console.log('Error indexing document: ' + err);
          }
  
          console.log('Indexed document in ' + indexTime + ' ms');
  
  
  });
}

function addEvent(docId, eventName, eventAddress, eventDescrip){
  var event = new cl.Document();
  event.addField('name', eventName, cl.STORE_YES|cl.INDEX_TOKENIZED);
  event.addField('address', eventAddress, cl.STORE_YES|cl.INDEX_TOKENIZED);
  event.addField('description', eventDescrip, cl.STORE_YES|cl.INDEX_TOKENIZED);
  addDoc(docId, event);
}


// addEvent('friday party', '123 fun fun fun lane', 'partyin, partyin, partyin, yeah');
// 
// addEvent('pool party','tylers house', 'bring your own floaty');
// 
// 
// addEvent('tylers birthday', 'tylers house', 'come celebrate tylers birthday. be sure to bring cake beotches');


addEvent("5", "heather appreciation day",'lucky lab', 'come celebrate the awesomeness that is heather');


