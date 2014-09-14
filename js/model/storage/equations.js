var storage = [
    {
    eqt:function(x, y){return (4+x+2*y==15)},
    constants:[4],
    vars: [{name:"x", count:1}, {name:"y", count:2}],
    result:15, 
    },
 
    {
    eqt:function(x, y){return (7*x+6*y+2 == 22)},
    constants:[4],
    vars: [{name:"x", count:7}, {name:"y", count:6}],
    result:22, 
    },

    {
    eqt:function(x){return (3*x+5 == 14)},
    constants:[3],
    vars: [{name:"x", count:3}],
    result:14, 
    },

    {
    eqt:function(x, y){return (2*x+y+5 == 26)},
    constants:[4],
    vars: [{name:"x", count:2}, {name:"y", count:1}],
    result:26, 
    },

    {
    eqt:function(x, y){return (5*x+5*y+3 == 18)},
    constants:[4],
    vars: [{name:"x", count:5}, {name:"y", count:5}],
    result:18, 
    },

    {
    eqt:function(x, y, z){return (1*x+7*y+4*z+3 == 27)},
    constants:[5],
    vars: [{name:"x", count:1}, {name:"y", count:7}, {name:"z", count:4}],
    result:27, 
    }
]
