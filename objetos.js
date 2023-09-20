//los objetos nos permiten almacenar datos
// a partir de una clave

/*
 miobjeto = { clave: visualViewport, 'clave': valor }
 miobjeto.clave
 miobjeto['clave']
*/

const subject = {
    name:'programacion',
    totalhours: 90,
    weekhours: 7,
    classrom: 'lab programing',
    teacher: 'spiterman',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.totalhours);
console.log(subject['weekhours']);
console.log(subject['practice hours']);

subject.classrom = 'lab programing 1';
console.log(subject.classrom);

console.log(subject);

subject['practical hours'] = 30;
console.log(subject);

const group = {
    name: '4c',
    career: 'tiadsm',
    subject:[
        subject
    ],
    students: [
        { name: 'mio', lastname: 'chang' },
        { name: 'mou', lastname: 'ching' },
        { name: 'muo', lastname: 'chong' }
    ]
}

console.log(group);
console.log(group.students);