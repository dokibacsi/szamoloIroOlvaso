class MatekModel{
    constructor(){
        //A nehézségi szint 3 részre van osztva: Könnyű(1), Normál(2), Nehéz(3).. - Egyelőre csak KÖNNYŰ mód elérhető!
        let difficultiesList = ["Easy", "Normal", "Hard"];
        this.numberList = [];
        this.taskType = 1;
        this.#matekFeladat(difficultiesList, difficultiesList[0], 2)
    }

    #matekFeladat(list, difficulty, numbers){
        this.#szamotGeneral(list, difficulty, numbers);
        //Feladatok = Összeadás(1), Kivonás(2), Szorzás(3), Osztás(4) ---- az utóbbi kettő később kerül fejlesztésre!
        this.taskType = Math.floor(Math.random() * 2) + 1;
        //console.log(this.taskType)
        if(this.taskType == 1){
            this.#osszead(this.numberList);
        }else if(this.taskType == 2){
            this.#kivon(this.numberList);
        }
    }

    #szamotGeneral(diflist, difficulty, numbers){
        let number = 1
        for (let i = 0; i < numbers; i++) {
            if(diflist[0] == difficulty){
                number = Math.floor(Math.random() * 10) + 1;
                this.numberList[i] = number
            }else if(diflist[1] == difficulty){
                number = Math.floor(Math.random() * 50) + 1;
                this.numberList[i] = number
            }else{
                number = Math.floor(Math.random() * 250) + 1;
                this.numberList[i] = number
            }
        //console.log(number)
        }
        //console.log(this.numberList)
    }

    #osszead(list){
        return list[0] + list[1]
    }

    #kivon(list){
        return list[0] - list[1]
    }

    #szoroz(list){
        return list[0] * list[1]
    }

    #oszt(list){
        return list[0] / list[1]
    }

    getNumberList(){
        return this.numberList;
    }

    getMathTaskType(){
        return this.taskType
    }


}

export default MatekModel