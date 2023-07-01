const tbody = document.getElementById('tbody');
let tbodyContainer = ``;


function displayTable() {
    tbodyContainer = `
    
     <tr>
                        <td data-title="خضار" >
                            <img src="new images/زهرة.png" alt="Alisha Roy">
                            <p style="font-size: 30px;">خس</p>
                            <p style="font-size: 30px;">السعر <span id="5s1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('5s1','5s1-price')">+</button>
                                <span id="5s1">1</span>
                                <button onclick="decreaseQuantity('5s1','5s1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="فواكه">
                            <img src="new images/تفاح.png" alt="Roy">
                            <p style="font-size: 30px;">تفاح</p>
                            <p style="font-size: 30px;">السعر <span id="apple1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('apple1','apple1-price')">+</button>
                                <span id="apple1">1</span>
                                <button onclick="decreaseQuantity('apple1','apple1-price')">-</button>
                            </div>
                        </td>

                        <td data-title="اللحوم"><img src="new images/لحم عجل.png" alt="9876543456">
                            <p style="font-size: 30px;">لحم عجل</p>
                            <p style="font-size: 30px;">السعر <span id="meat1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('meat1','meat1-price')">+</button>
                                <span id="meat1">1</span>
                                <button onclick="decreaseQuantity('meat1','meat1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="البان"><img src="Milk/بوك1.png" alt="20">
                            <p style="font-size: 30px;">حليب</p>
                            <p style="font-size: 30px;">السعر <span id="milk1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('milk1','milk1-price')">+</button>
                                <span id="milk1">1</span>
                                <button onclick="decreaseQuantity('milk1','milk1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="معلبات"><img src="new images/كولا.png" alt="Kerala">
                            <p style="font-size: 30px;">كوكاكولا</p>
                            <p style="font-size: 30px;">السعر <span id="coca1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                               <button onclick="increaseQuantity('coca1','coca1-price')">+</button>
                                <span id="coca1">1</span>
                                <button onclick="decreaseQuantity('coca1','coca1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="خبز"><img src="new images/خبز1.png" alt="abc@gmail.com">
                            <p style="font-size: 30px;">خبز</p>
                            <p style="font-size: 30px;">السعر <span id="bread1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bread1','bread1-price')">+</button>
                                <span id="bread1">1</span>
                                <button onclick="decreaseQuantity('bread1','bread1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="منظفات"><img src="Detergent/5.jpg" alt="9876543456">
                            <p style="font-size: 30px;">مسحوق غسيل</p>
                            <p style="font-size: 30px;">السعر <span id="detergent1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('detergent1','detergent1-price')">+</button>
                                <span id="detergent1">1</span>
                                <button onclick="decreaseQuantity('detergent1','detergent1-price')">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="خضار"><img src="new images/بندورة2.png" alt="Alisha Roy">
                            <p style="font-size: 30px;">بندورة</p>
                            <p style="font-size: 30px;">السعر <span id="bndora1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bndora1','bndora1-price')">+</button>
                                <span id="bndora1">1</span>
                                <button onclick="decreaseQuantity('bndora1','bndora1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="فواكه"><img src="new images/تفاح.png" alt="Roy">
                            <p style="font-size: 30px;">تفاح</p>
                            <p style="font-size: 30px;">السعر <span id="apple2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('apple2','apple2-price')">+</button>
                                <span id="apple2">1</span>
                                <button onclick="decreaseQuantity('apple2','apple2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="اللحوم"><img src="new images/فخاذ دجاج.png" alt="9876543456">
                            <p style="font-size: 30px;">فخاذ دجاج</p>
                            <p style="font-size: 30px;">السعر <span id="chicken1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('chicken1','chicken1-price')">+</button>
                                <span id="chicken1">1</span>
                                <button onclick="decreaseQuantity('chicken1','chicken1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="البان"><img src="Milk/بوك1.png" alt="20">
                            <p style="font-size: 30px;">حليب</p>
                            <p style="font-size: 30px;">السعر <span id="milk2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('milk2','milk2-price')">+</button>
                                <span id="milk2">1</span>
                                <button onclick="decreaseQuantity('milk2','milk2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="معلبات"><img src="new images/كولا.png" alt="Kerala">
                            <p style="font-size: 30px;">كوكاكولا</p>
                            <p style="font-size: 30px;">السعر <span id="coca2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('coca2','coca2-price')">+</button>
                                <span id="coca2">1</span>
                                <button onclick="decreaseQuantity('coca2','coca2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="خبز"><img src="new images/خبز2.png" alt="abc@gmail.com">
                            <p style="font-size: 30px;">خبز</p>
                            <p style="font-size: 30px;">السعر <span id="bread2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bread2','bread2-price')">+</button>
                                <span id="bread2">1</span>
                                <button onclick="decreaseQuantity('bread2','bread2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="منظفات"><img src="Detergent/4.jpg" alt="9876543456">
                            <p style="font-size: 30px;">مسحوق غسيل</p>
                            <p style="font-size: 30px;">السعر <span id="detergent2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('detergent2','detergent2-price')">+</button>
                                <span id="detergent2">1</span>
                                <button onclick="decreaseQuantity('detergent2','detergent2-price')">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="خضار"><img src="new images/خس.png" alt="Alisha Roy">
                            <p style="font-size: 30px;">خس</p>
                            <p style="font-size: 30px;">السعر <span id="5s2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('5s2','5s2-price')">+</button>
                                <span id="5s2">1</span>
                                <button onclick="decreaseQuantity('5s2','5s2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="فواكه"><img src="new images/تفاح.png" alt="Roy">
                            <p style="font-size: 30px;">تفاح</p>
                            <p style="font-size: 30px;">السعر <span id="apple3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('apple3','apple3-price')">+</button>
                                <span id="apple3">1</span>
                                <button onclick="decreaseQuantity('apple3','apple3-price')">-</button>
                            </div>
                        </td>
                        <td data-title="اللحوم"><img src="new images/دجاج.png" alt="9876543456">
                            <p style="font-size: 30px;">دجاج</p>
                            <p style="font-size: 30px;">السعر <span id="chicken2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('chicken2','chicken2-price')">+</button>
                                <span id="chicken2">1</span>
                                <button onclick="decreaseQuantity('chicken2','chicken2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="البان"><img src="Milk/بوك1.png" alt="20">
                            <p style="font-size: 30px;">حليب</p>
                            <p style="font-size: 30px;">السعر <span id="milk3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('milk3','milk3-price')">+</button>
                                <span id="milk3">1</span>
                                <button onclick="decreaseQuantity('milk3','milk3-price')">-</button>
                            </div>
                        </td>
                        <td data-title="معلبات"><img src="new images/كولا.png" alt="Kerala">
                            <p style="font-size: 30px;">كوكاكولا</p>
                            <p style="font-size: 30px;">السعر <span id="coca3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('coca3','coca3-price')">+</button>
                                <span id="coca3">1</span>
                                <button onclick="decreaseQuantity('coca3','coca3-price')">-</button>
                            </div>
                        </td>
                        <td data-title="خبز"><img src="new images/خبز3.png" alt="abc@gmail.com">
                            <p style="font-size: 30px;">خبز</p>
                            <p style="font-size: 30px;">السعر <span id="bread3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bread3','bread3-price')">+</button>
                                <span id="bread3">1</span>
                                <button onclick="decreaseQuantity('bread3','bread3-price')">-</button>
                            </div>
                        </td>
                        <td data-title="منظفات"><img src="Detergent/3.jpg" alt="9876543456">
                            <p style="font-size: 30px;">مسحوق غسيل</p>
                            <p style="font-size: 30px;">السعر <span id="detergent3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('detergent3','detergent3-price')">+</button>
                                <span id="detergent3">1</span>
                                <button onclick="decreaseQuantity('detergent3','detergent3-price')">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="خضار"><img src="new images/بصل.png" alt="Alisha Roy">
                            <p style="font-size: 30px;">بصل</p>
                            <p style="font-size: 30px;">السعر <span id="onions1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('onions1','onions1-price')">+</button>
                                <span id="onions1">1</span>
                                <button onclick="decreaseQuantity('onions1','onions1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="فواكه"><img src="new images/بطيخ.png" alt="Roy">
                            <p style="font-size: 30px;">بطيخ</p>
                            <p style="font-size: 30px;">السعر <span id="melon1-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('melon1','melon1-price')">+</button>
                                <span id="melon1">1</span>
                                <button onclick="decreaseQuantity('melon1','melon1-price')">-</button>
                            </div>
                        </td>
                        <td data-title="اللحوم"><img src="new images/فخاذ دجاج.png" alt="9876543456">
                            <p style="font-size: 30px;">فخاذ دجاج</p>
                            <p style="font-size: 30px;">السعر <span id="chicken3-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('chicken3','chicken3-price')">+</button>
                                <span id="chicken3">1</span>
                                <button onclick="decreaseQuantity('chicken3','chicken3-price')">-</button>
                            </div>
                        </td>
                        <td data-title="البان"><img src="Milk/بوك1.png" alt="20">
                            <p style="font-size: 30px;">حليب</p>
                            <p style="font-size: 30px;">السعر <span id="milk4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('milk4','milk4-price')">+</button>
                                <span id="milk4">1</span>
                                <button onclick="decreaseQuantity('milk4','milk4-price')">-</button>
                            </div>
                        </td>
                        <td data-title="معلبات"><img src="new images/كولا.png" alt="Kerala">
                            <p style="font-size: 30px;">كوكاكولا</p>
                            <p style="font-size: 30px;">السعر <span id="coca4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('coca4','coca4-price')">+</button>
                                <span id="coca4">1</span>
                                <button onclick="decreaseQuantity('coca4','coca4-price')">-</button>
                            </div>
                        </td>
                        <td data-title="خبز"><img src="new images/خبز2.png" alt="abc@gmail.com">
                            <p style="font-size: 30px;">خبز</p>
                            <p style="font-size: 30px;">السعر <span id="bread4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bread4','bread4-price')">+</button>
                                <span id="bread4">1</span>
                                <button onclick="decreaseQuantity('bread4','bread4-price')">-</button>
                            </div>
                        </td>
                        <td data-title="منظفات"><img src="Detergent/2.jpg" alt="9876543456">
                            <p style="font-size: 30px;">مسحوق غسيل</p>
                            <p style="font-size: 30px;">السعر <span id="detergent4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('detergent4','detergent4-price')">+</button>
                                <span id="detergent4">1</span>
                                <button onclick="decreaseQuantity('detergent4','detergent4-price')">-</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="خضار"><img src="new images/بندورة2.png" alt="Alisha Roy">
                            <p style="font-size: 30px;">بندورة</p>
                            <p style="font-size: 30px;">السعر <span id="bandora2-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bandora2','bandora2-price')">+</button>
                                <span id="bandora2">1</span>
                                <button onclick="decreaseQuantity('bandora2','bandora2-price')">-</button>
                            </div>
                        </td>
                        <td data-title="فواكه"><img src="new images/تفاح.png" alt="Roy">
                            <p style="font-size: 30px;">تفاح</p>
                            <p style="font-size: 30px;">السعر <span id="apple4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('apple4','apple4-price')">+</button>
                                <span id="apple4">1</span>
                                <button onclick="decreaseQuantity('apple4','apple4-price')">-</button>
                            </div>
                        </td>
                        <td data-title="اللحوم"><img src="new images/دجاج.png" alt="9876543456">
                            <p style="font-size: 30px;">دجاج</p>
                            <p style="font-size: 30px;">السعر <span id="chicken4-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('chicken4','chicken4-price')">+</button>
                                <span id="chicken4">1</span>
                                <button onclick="decreaseQuantity('chicken4','chicken4-price')">-</button>
                            </div>
                        </td>
                        <td data-title="البان"><img src="Milk/بوك1.png" alt="20">
                            <p style="font-size: 30px;">حليب</p>
                            <p style="font-size: 30px;">السعر <span id="milk5-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('milk5','milk5-price')">+</button>
                                <span id="milk5">1</span>
                                <button onclick="decreaseQuantity('milk5','milk5-price')">-</button>
                            </div>
                        </td>
                        <td data-title="معلبات"><img src="new images/كولا.png" alt="Kerala">
                            <p style="font-size: 30px;">كوكاكولا</p>
                            <p style="font-size: 30px;">السعر <span id="coca5-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('coca5','coca5-price')">+</button>
                                <span id="coca5">1</span>
                                <button onclick="decreaseQuantity('coca5','coca5-price')">-</button>
                            </div>
                        </td>
                        <td data-title="خبز"><img src="new images/خبز3.png" alt="abc@gmail.com">
                            <p style="font-size: 30px;">خبز</p>
                            <p style="font-size: 30px;">السعر <span id="bread5-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('bread5','bread5-price')">+</button>
                                <span id="bread5">1</span>
                                <button onclick="decreaseQuantity('bread5','bread5-price')">-</button>
                            </div>
                        </td>
                        <td data-title="منظفات"><img src="Detergent/5.jpg" alt="9876543456">
                            <p style="font-size: 30px;">مسحوق غسيل</p>
                            <p style="font-size: 30px;">السعر <span id="detergent5-price">5</span>$ لكل كيلو</p>
                            <div style="font-size: 30px;">
                                <button onclick="increaseQuantity('detergent5','detergent5-price')">+</button>
                                <span id="detergent5">1</span>
                                <button onclick="decreaseQuantity('detergent5','detergent5-price')">-</button>
                            </div>
                        </td>
                    </tr>
    `;
    tbody.innerHTML = tbodyContainer;
}

function increaseQuantity(productName, productPrice) {
    let pName = document.getElementById(productName);
    let pPrice = document.getElementById(productPrice);
    pName.innerHTML = Number(pName.innerHTML) + 1;
    pPrice.innerHTML = 5 * Number(pName.innerHTML)
}

function decreaseQuantity(productName, productPrice) {
    let pName = document.getElementById(productName);
    let pPrice = document.getElementById(productPrice);

    if (pName.innerHTML == 1)
        return;

    pName.innerHTML = Number(pName.innerHTML) - 1;
    pPrice.innerHTML = 5 * Number(pName.innerHTML)

}
