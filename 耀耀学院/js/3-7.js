(function () {
    var tableMaker = {
        CONFIG: {
            TableId: "TMID",    //表格id
            contenteditable: "false",  //表格是否可编辑  false 不支持  true 富文本   plaintext-only 纯文本
            sorted: [                  //每一列是否支持那种排序
                {
                    show: false,  //是否显示按钮
                    order: false,  // 顺序排列是否可用
                    reverse: false,  //逆序排列是否可用
                },
                {
                    show: true,
                    order: true,
                    reverse: true,
                },
                {
                    show: true,
                    order: true,
                    reverse: true,
                },
                {
                    show: true,
                    order: true,
                    reverse: true,
                }
            ],

            notAllowedCssname: 'not-allowed',  //不可用时的css样式名

            orderSort: undefined,     //顺序排函数接口        暂时没用上。。。。。
            reverseSort: undefined,   //逆序排函数接口
            order: -1,   //升序
            reverse: 1,  //降序
        },
        //表格数据，超过规定列数的将不显示，少于列数则为空
        TABLEDATA: {
            col: 4,
            thead: ["姓名", "语文", "数学", "英语"],
            tbody: [
                ["小明", "80", "90", "70"],
                ["小红", "90", "60", "90"],
                ["小亮", "60", "100", "70"],
                ["小刚", "74", "85", "70"],
                ["小强", "68", "67", "89"]
            ],
        },
        /**
         * 初始化
         * 
         * @param {any} node 要插入表格的父节点
         */
        init: function (node) {
            this.TABLEDATA.col = this.TABLEDATA.thead.length;
            let table = document.createElement('table');
            table.setAttribute('id', this.CONFIG.TableId);
            let theadContent = this.createThead(this.TABLEDATA.thead);
            let tbodyContent = this.createTbody(this.TABLEDATA.tbody);
            table.innerHTML = theadContent + tbodyContent;
            node.appendChild(table);
        },
        /**
         * 创建表格头
         * 
         * @param {any} arr 传入表格头的数组
         */
        createThead: function (arr) {
            let trContent = "";
            for (let i = 0; i < this.TABLEDATA.col; i++) {
                trContent += this.createTheadTd(arr[i], i);
            }
            return `<thead><tr>${trContent}</tr></thead>`;
        },
        /**
         * 根据配置文件创建表头的内容
         * 
         * @param {any} str td内容的字符串
         * @param {any} i 是第几列
         * @returns HTML字符串
         */
        createTheadTd: function (str, i) {
            if (typeof (str) === "undefined") str = '';
            // 是否显示排序按钮
            if (this.CONFIG.sorted[i].show) {
                //两个按钮是否可用
                let show_order = this.CONFIG.sorted[i].order ? "" : this.CONFIG.notAllowedCssname;
                let show_reverse = this.CONFIG.sorted[i].reverse ? "" : this.CONFIG.notAllowedCssname;
                let template_btn = `<i class="order ${show_order}" col-id="${i}" available="${show_order}" ></i>`
                    + `<i class="reverse ${show_reverse}" col-id="${i}" available="${show_reverse}"></i>`;
                return `<td>${str}${template_btn}</td>`;
            } else {
                return `<td>${str}</td>`;
            }
        },
        /**
         * 创建tbody的内容
         * 
         * @param {any} arr tbody内容数组
         * @returns HTML字符串
         */
        createTbody: function (arr) {
            let tbodyContent = "";
            for (let i = 0; i < arr.length; i++) {
                tbodyContent += this.createTr(arr[i]);
            }
            return `<tbody>${tbodyContent}</tbody>`
        },
        /**
         * 创建一行
         * 
         * @param {any} arr 包含一行内容的数组
         * @returns 拼接出的一行表格的html串
         */
        createTr: function (arr) {
            let trContent = "";
            for (let i = 0; i < this.TABLEDATA.col; i++) {
                trContent += this.createTd(arr[i]);
            }
            return `<tr>${trContent}</tr>`
        },
        /**
         * 创建表格的一格的串
         * 
         * @param {any} str 传入一格内容
         * @returns 拼接出的一格表格的html串h
         */
        createTd: function (str) {
            if (typeof (str) === "undefined") str = '';

            if (this.CONFIG.contenteditable !== 'false') {
                return `<td contenteditable="${this.CONFIG.contenteditable}">${str}</td>`;
            }
            return `<td>${str}</td>`;
        },
        /**
         * 绑定按钮委托事件
         * 
         * @param {any} fun 事件回调函数
         */
        sortEvent: function (fun) {
            let node = document.getElementById(this.CONFIG.TableId).getElementsByTagName('thead')[0];
            node.addEventListener('click', fun);
        },
        /**
         * 生成比较函数的函数
         * 
         * @param {any} n 比较第几列
         * @param {any} m 正序还是逆序  1或-1
         * @returns cmp函数
         */
        createCmp: function (n, m) {
            return function (a, b) {
                return (Number(a[n]) - Number(b[n])) * m;
            }
        },
        /**
         * 对原数据进行排序
         *  
         * @param {any} cmp 比较函数
         */
        sortfun: function (cmp) {
            this.TABLEDATA.tbody = this.TABLEDATA.tbody.sort(cmp);
        },
        /**
         * 更新tbody的数据
         * 
         */
        updeta: function () {
            let tbody = document.getElementById(this.CONFIG.TableId).getElementsByTagName('tbody')[0];
            tbody.innerHTML = this.createTbody(this.TABLEDATA.tbody);
        }
    }
    window.tableMaker = tableMaker;
})()
// 初始化
tableMaker.init(document.getElementById('table-box'));

// 绑定委托事件
tableMaker.sortEvent(function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.getAttribute('available') === "") {
        let n = target.getAttribute('col-id');
        tableMaker.sortfun(tableMaker.createCmp(n, tableMaker.CONFIG[target.classList[0]]));
        tableMaker.updeta();
    }
});