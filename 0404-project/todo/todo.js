import TodoItem from "./item.js";

// To-Do 항목 관리 모듈 정의
const todoList = {
    items: [], // To-Do 항목 리스트

    // todoList에 새로운 항목을 추가하는 메소드
    add(title, dueDate) {
        const item = new TodoItem(title, dueDate);
        this.items.push(item);
        this.save();
        return item;
    },

    // todoList에 기존 항목을 삭제하는 메소드
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.save(); // 로컬 스토리지에 항목 리스트 저장
        }
    },

    // 항목의 완료 여부를 토글하는 메소드
    toggleComplete(item) {
        item.toggleComplete();
        this.save(); //로컬 스토리지에 항목 리스트 저장
    },

    // To-Do 항목 리스트를 로컬 스토리지에 저장하는 메소드
    save() {
        localStorage.setItem("todoList", JSON.stringify(this.items));
    },

    // To-Do 항목 리스트를 로컬 스토리지에서 불러오는 메소드
    load() {
        const items = localStorage.getItem("todoList");
        if (items) {
            this.items = JSON.parse(items);
        }
    },
};

export { todoList };