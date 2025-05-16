document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Remove active class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      // Add active class to current button and pane
      button.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll(".copy-btn")

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target")
      const codeElement = document.getElementById(targetId)
      const textToCopy = codeElement.textContent

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerHTML
        button.innerHTML = '<i class="fas fa-check"></i> Copied!'

        setTimeout(() => {
          button.innerHTML = originalText
        }, 2000)
      })
    })
  })

  // Button Animation Generator
  initButtonGenerator()

  // Box Shadow Maker
  initBoxShadowMaker()

  // Hover Effect Maker
  initHoverEffectMaker()

  // Color Picker
  initColorPicker()

  // Table Generator
  initTableGenerator()

  // Form Generator
  initFormGenerator()

  // Gradient Generator
  initGradientGenerator()

  // Animation Generator
  initAnimationGenerator()

  // Filter Generator
  initFilterGenerator()

  // Transform Generator
  initTransformGenerator()

  // Flexbox Generator
  initFlexboxGenerator()

  // Grid Generator
  initGridGenerator()

  // Responsive Design Tool
  initResponsiveTool()

  // SVG Icon Generator
  initSvgGenerator()
})

// Button Animation Generator
function initButtonGenerator() {
  const btnText = document.getElementById("btn-text")
  const btnBgColor = document.getElementById("btn-bg-color")
  const btnTextColor = document.getElementById("btn-text-color")
  const btnPadding = document.getElementById("btn-padding")
  const btnBorderRadius = document.getElementById("btn-border-radius")
  const btnHoverEffect = document.getElementById("btn-hover-effect")
  const btnHoverBgColor = document.getElementById("btn-hover-bg-color")

  const btnPreview = document.getElementById("btn-preview")
  const btnCssCode = document.getElementById("btn-css-code")
  const btnHtmlCode = document.getElementById("btn-html-code")

  const btnPaddingValue = document.getElementById("btn-padding-value")
  const btnBorderRadiusValue = document.getElementById("btn-border-radius-value")

  // Update preview and code on input change
  ;[btnText, btnBgColor, btnTextColor, btnPadding, btnBorderRadius, btnHoverEffect, btnHoverBgColor].forEach(
    (input) => {
      input.addEventListener("input", updateButtonPreview)
    },
  )

  function updateButtonPreview() {
    // Update preview
    btnPreview.textContent = btnText.value
    btnPreview.style.backgroundColor = btnBgColor.value
    btnPreview.style.color = btnTextColor.value
    btnPreview.style.padding = `${btnPadding.value}px 24px`
    btnPreview.style.borderRadius = `${btnBorderRadius.value}px`

    // Update value displays
    btnPaddingValue.textContent = `${btnPadding.value}px`
    btnBorderRadiusValue.textContent = `${btnBorderRadius.value}px`

    // Generate CSS code
    let css = `.button {
  padding: ${btnPadding.value}px 24px;
  background-color: ${btnBgColor.value};
  color: ${btnTextColor.value};
  border: none;
  border-radius: ${btnBorderRadius.value}px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.button:hover {`

    switch (btnHoverEffect.value) {
      case "scale":
        css += `
  transform: scale(1.1);`
        break
      case "bg-change":
        css += `
  background-color: ${btnHoverBgColor.value};`
        break
      case "shadow":
        css += `
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);`
        break
      case "border":
        css += `
  border: 2px solid ${btnHoverBgColor.value};`
        break
    }

    css += `
}`

    btnCssCode.textContent = css

    // Generate HTML code
    const html = `<button class="button">${btnText.value}</button>`
    btnHtmlCode.textContent = html
  }

  // Initialize preview
  updateButtonPreview()
}

// Box Shadow Maker
function initBoxShadowMaker() {
  const hOffset = document.getElementById("shadow-h-offset")
  const vOffset = document.getElementById("shadow-v-offset")
  const blur = document.getElementById("shadow-blur")
  const spread = document.getElementById("shadow-spread")
  const color = document.getElementById("shadow-color")
  const opacity = document.getElementById("shadow-opacity")
  const inset = document.getElementById("shadow-inset")

  const preview = document.getElementById("shadow-preview")
  const cssCode = document.getElementById("shadow-css-code")

  const hOffsetValue = document.getElementById("shadow-h-offset-value")
  const vOffsetValue = document.getElementById("shadow-v-offset-value")
  const blurValue = document.getElementById("shadow-blur-value")
  const spreadValue = document.getElementById("shadow-spread-value")
  const opacityValue = document.getElementById("shadow-opacity-value")

  // Update preview and code on input change
  ;[hOffset, vOffset, blur, spread, color, opacity, inset].forEach((input) => {
    input.addEventListener("input", updateShadowPreview)
  })

  function updateShadowPreview() {
    // Update value displays
    hOffsetValue.textContent = `${hOffset.value}px`
    vOffsetValue.textContent = `${vOffset.value}px`
    blurValue.textContent = `${blur.value}px`
    spreadValue.textContent = `${spread.value}px`
    opacityValue.textContent = (opacity.value / 100).toFixed(1)

    // Convert color and opacity to rgba
    const hexColor = color.value
    const r = Number.parseInt(hexColor.substr(1, 2), 16)
    const g = Number.parseInt(hexColor.substr(3, 2), 16)
    const b = Number.parseInt(hexColor.substr(5, 2), 16)
    const a = opacity.value / 100

    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`

    // Create shadow value
    const insetValue = inset.checked ? "inset " : ""
    const shadowValue = `${insetValue}${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${rgbaColor}`

    // Update preview
    preview.style.boxShadow = shadowValue

    // Generate CSS code
    const css = `.element {
  box-shadow: ${shadowValue};
}`

    cssCode.textContent = css
  }

  // Initialize preview
  updateShadowPreview()
}

// Hover Effect Maker
function initHoverEffectMaker() {
  const elementType = document.getElementById("hover-element")
  const bgColor = document.getElementById("hover-bg-color")
  const textColor = document.getElementById("hover-text-color")
  const transition = document.getElementById("hover-transition")
  const scaleCheck = document.getElementById("hover-scale")
  const bgChangeCheck = document.getElementById("hover-bg-change")
  const textChangeCheck = document.getElementById("hover-text-change")
  const shadowCheck = document.getElementById("hover-shadow")
  const scaleValue = document.getElementById("hover-scale-value")
  const bgChangeColor = document.getElementById("hover-bg-change-color")
  const textChangeColor = document.getElementById("hover-text-change-color")

  const preview = document.getElementById("hover-preview")
  const cssCode = document.getElementById("hover-css-code")
  const htmlCode = document.getElementById("hover-html-code")

  const transitionValue = document.getElementById("hover-transition-value")
  const scaleDisplay = document.getElementById("hover-scale-display")

  // Update preview and code on input change
  ;[
    elementType,
    bgColor,
    textColor,
    transition,
    scaleCheck,
    bgChangeCheck,
    textChangeCheck,
    shadowCheck,
    scaleValue,
    bgChangeColor,
    textChangeColor,
  ].forEach((input) => {
    input.addEventListener("input", updateHoverPreview)
  })

  // Add hover event listeners to preview element
  preview.addEventListener("mouseenter", () => {
    applyHoverStyles(preview)
  })

  preview.addEventListener("mouseleave", () => {
    resetHoverStyles(preview)
  })

  function applyHoverStyles(element) {
    if (scaleCheck.checked) {
      element.style.transform = `scale(${scaleValue.value})`
    }

    if (bgChangeCheck.checked) {
      element.style.backgroundColor = bgChangeColor.value
    }

    if (textChangeCheck.checked) {
      element.style.color = textChangeColor.value
    }

    if (shadowCheck.checked) {
      element.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"
    }
  }

  function resetHoverStyles(element) {
    element.style.transform = ""
    element.style.backgroundColor = bgColor.value
    element.style.color = textColor.value
    element.style.boxShadow = ""
  }

  function updateHoverPreview() {
    // Update value displays
    transitionValue.textContent = `${transition.value}s`
    scaleDisplay.textContent = scaleValue.value

    // Update preview
    preview.style.backgroundColor = bgColor.value
    preview.style.color = textColor.value
    preview.style.transition = `all ${transition.value}s`

    // Generate CSS code
    let css = `.hover-element {
  padding: 20px;
  background-color: ${bgColor.value};
  color: ${textColor.value};
  border-radius: 5px;
  cursor: pointer;
  transition: all ${transition.value}s;
}

.hover-element:hover {`

    if (scaleCheck.checked) {
      css += `
  transform: scale(${scaleValue.value});`
    }

    if (bgChangeCheck.checked) {
      css += `
  background-color: ${bgChangeColor.value};`
    }

    if (textChangeCheck.checked) {
      css += `
  color: ${textChangeColor.value};`
    }

    if (shadowCheck.checked) {
      css += `
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);`
    }

    css += `
}`

    cssCode.textContent = css

    // Generate HTML code
    const content = "Hover over me"
    let html = ""

    switch (elementType.value) {
      case "div":
        html = `<div class="hover-element">${content}</div>`
        break
      case "button":
        html = `<button class="hover-element">${content}</button>`
        break
      case "a":
        html = `<a href="#" class="hover-element">${content}</a>`
        break
      case "img":
        html = `<img src="image.jpg" alt="Hover Image" class="hover-element">`
        break
    }

    htmlCode.textContent = html
  }

  // Initialize preview
  updateHoverPreview()
}

// Color Picker
function initColorPicker() {
  const colorInput = document.getElementById("color-picker-input")
  const opacityInput = document.getElementById("color-opacity")
  const formatRadios = document.querySelectorAll('input[name="color-format"]')

  const preview = document.getElementById("color-preview")
  const hexCode = document.getElementById("color-hex")
  const rgbCode = document.getElementById("color-rgb")
  const rgbaCode = document.getElementById("color-rgba")
  const hslCode = document.getElementById("color-hsl")
  const cssCode = document.getElementById("color-css-code")

  const opacityValue = document.getElementById("color-opacity-value")

  // Update preview and code on input change
  ;[colorInput, opacityInput].forEach((input) => {
    input.addEventListener("input", updateColorPreview)
  })

  formatRadios.forEach((radio) => {
    radio.addEventListener("change", updateColorPreview)
  })

  function updateColorPreview() {
    // Update opacity value display
    opacityValue.textContent = (opacityInput.value / 100).toFixed(2)

    // Get color values
    const hexValue = colorInput.value
    const r = Number.parseInt(hexValue.substr(1, 2), 16)
    const g = Number.parseInt(hexValue.substr(3, 2), 16)
    const b = Number.parseInt(hexValue.substr(5, 2), 16)
    const a = opacityInput.value / 100

    // Update color codes
    hexCode.textContent = hexValue
    rgbCode.textContent = `rgb(${r}, ${g}, ${b})`
    rgbaCode.textContent = `rgba(${r}, ${g}, ${b}, ${a})`

    // Calculate HSL
    const rNorm = r / 255
    const gNorm = g / 255
    const bNorm = b / 255

    const max = Math.max(rNorm, gNorm, bNorm)
    const min = Math.min(rNorm, gNorm, bNorm)

    let h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)
          break
        case gNorm:
          h = (bNorm - rNorm) / d + 2
          break
        case bNorm:
          h = (rNorm - gNorm) / d + 4
          break
      }

      h /= 6
    }

    const hDeg = Math.round(h * 360)
    const sPercent = Math.round(s * 100)
    const lPercent = Math.round(l * 100)

    hslCode.textContent = `hsl(${hDeg}, ${sPercent}%, ${lPercent}%)`

    // Update preview
    preview.style.backgroundColor = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : hexValue

    // Get selected format
    let selectedFormat
    formatRadios.forEach((radio) => {
      if (radio.checked) {
        selectedFormat = radio.value
      }
    })

    // Generate CSS code
    let colorValue
    switch (selectedFormat) {
      case "hex":
        colorValue = hexValue
        break
      case "rgb":
        colorValue = `rgb(${r}, ${g}, ${b})`
        break
      case "rgba":
        colorValue = `rgba(${r}, ${g}, ${b}, ${a})`
        break
      case "hsl":
        colorValue = `hsl(${hDeg}, ${sPercent}%, ${lPercent}%)`
        break
    }

    cssCode.textContent = `background-color: ${colorValue};`
  }

  // Initialize preview
  updateColorPreview()
}

// Table Generator
function initTableGenerator() {
  const rowsInput = document.getElementById("table-rows")
  const colsInput = document.getElementById("table-cols")
  const headerCheck = document.getElementById("table-header")
  const borderInput = document.getElementById("table-border")
  const borderColorInput = document.getElementById("table-border-color")
  const paddingInput = document.getElementById("table-padding")
  const stripedCheck = document.getElementById("table-striped")
  const hoverCheck = document.getElementById("table-hover")
  const generateBtn = document.getElementById("generate-table")

  const preview = document.getElementById("table-preview")
  const htmlCode = document.getElementById("table-html-code")
  const cssCode = document.getElementById("table-css-code")

  const borderValue = document.getElementById("table-border-value")
  const paddingValue = document.getElementById("table-padding-value")

  // Update value displays on input change
  borderInput.addEventListener("input", () => {
    borderValue.textContent = `${borderInput.value}px`
  })

  paddingInput.addEventListener("input", () => {
    paddingValue.textContent = `${paddingInput.value}px`
  })

  // Generate table on button click
  generateBtn.addEventListener("click", generateTable)

  function generateTable() {
    const rows = Number.parseInt(rowsInput.value)
    const cols = Number.parseInt(colsInput.value)
    const includeHeader = headerCheck.checked
    const borderWidth = borderInput.value
    const borderColor = borderColorInput.value
    const cellPadding = paddingInput.value
    const isStriped = stripedCheck.checked
    const hasHover = hoverCheck.checked

    // Generate HTML
    let tableHtml = '<table class="custom-table">\n'

    if (includeHeader) {
      tableHtml += "  <thead>\n    <tr>\n"

      for (let i = 0; i < cols; i++) {
        tableHtml += `      <th>Header ${i + 1}</th>\n`
      }

      tableHtml += "    </tr>\n  </thead>\n"
    }

    tableHtml += "  <tbody>\n"

    for (let i = 0; i < rows; i++) {
      tableHtml += "    <tr>\n"

      for (let j = 0; j < cols; j++) {
        tableHtml += `      <td>Row ${i + 1}, Cell ${j + 1}</td>\n`
      }

      tableHtml += "    </tr>\n"
    }

    tableHtml += "  </tbody>\n</table>"

    // Generate CSS
    let tableCss = `.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th, .custom-table td {
  padding: ${cellPadding}px;`

    if (borderWidth > 0) {
      tableCss += `
  border: ${borderWidth}px solid ${borderColor};`
    }

    tableCss += `
}

.custom-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}`

    if (isStriped) {
      tableCss += `

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}`
    }

    if (hasHover) {
      tableCss += `

.custom-table tbody tr:hover {
  background-color: #f5f5f5;
}`
    }

    // Update preview and code
    preview.innerHTML = tableHtml
    htmlCode.textContent = tableHtml
    cssCode.textContent = tableCss

    // Apply CSS to preview
    const tableElement = preview.querySelector("table")
    const thElements = preview.querySelectorAll("th")
    const tdElements = preview.querySelectorAll("td")
    const trElements = preview.querySelectorAll("tbody tr")

    tableElement.style.borderCollapse = "collapse"
    tableElement.style.width = "100%"

    thElements.forEach((th) => {
      th.style.padding = `${cellPadding}px`
      th.style.backgroundColor = "#f2f2f2"
      th.style.fontWeight = "bold"
      th.style.textAlign = "left"

      if (borderWidth > 0) {
        th.style.border = `${borderWidth}px solid ${borderColor}`
      }
    })

    tdElements.forEach((td) => {
      td.style.padding = `${cellPadding}px`

      if (borderWidth > 0) {
        td.style.border = `${borderWidth}px solid ${borderColor}`
      }
    })

    if (isStriped) {
      trElements.forEach((tr, index) => {
        if (index % 2 === 1) {
          tr.style.backgroundColor = "#f9f9f9"
        }
      })
    }

    if (hasHover) {
      trElements.forEach((tr) => {
        tr.addEventListener("mouseenter", () => {
          tr.style.backgroundColor = "#f5f5f5"
        })

        tr.addEventListener("mouseleave", () => {
          if (isStriped && Array.from(trElements).indexOf(tr) % 2 === 1) {
            tr.style.backgroundColor = "#f9f9f9"
          } else {
            tr.style.backgroundColor = ""
          }
        })
      })
    }
  }

  // Initialize table
  generateTable()
}

// Form Generator
function initFormGenerator() {
  const formTitle = document.getElementById("form-title")
  const formFields = document.getElementById("form-fields")
  const addFieldBtn = document.getElementById("add-field")
  const submitText = document.getElementById("form-submit-text")
  const submitColor = document.getElementById("form-submit-color")
  const formLayout = document.getElementById("form-layout")
  const generateBtn = document.getElementById("generate-form")

  const preview = document.getElementById("form-preview")
  const htmlCode = document.getElementById("form-html-code")
  const cssCode = document.getElementById("form-css-code")

  // Add new field
  addFieldBtn.addEventListener("click", () => {
    const fieldDiv = document.createElement("div")
    fieldDiv.className = "form-field"

    fieldDiv.innerHTML = `
        <select class="field-type">
            <option value="text">Text Input</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio Buttons</option>
            <option value="select">Dropdown</option>
        </select>
        <input type="text" class="field-label" placeholder="Label" value="Field">
        <input type="text" class="field-placeholder" placeholder="Placeholder" value="Enter value">
        <button class="remove-field"><i class="fas fa-times"></i></button>
    `

    formFields.appendChild(fieldDiv)

    // Add remove field event listener
    const removeBtn = fieldDiv.querySelector(".remove-field")
    removeBtn.addEventListener("click", () => {
      formFields.removeChild(fieldDiv)
    })
  })

  // Remove field event listeners for initial field
  const initialRemoveBtn = document.querySelector(".remove-field")
  initialRemoveBtn.addEventListener("click", (e) => {
    const fieldDiv = e.target.closest(".form-field")
    if (formFields.children.length > 1) {
      formFields.removeChild(fieldDiv)
    }
  })

  // Generate form on button click
  generateBtn.addEventListener("click", generateForm)

  function generateForm() {
    const title = formTitle.value
    const buttonText = submitText.value
    const buttonColor = submitColor.value
    const layout = formLayout.value

    // Get all fields
    const fields = []
    const fieldDivs = formFields.querySelectorAll(".form-field")

    fieldDivs.forEach((div) => {
      const type = div.querySelector(".field-type").value
      const label = div.querySelector(".field-label").value
      const placeholder = div.querySelector(".field-placeholder").value

      fields.push({ type, label, placeholder })
    })

    // Generate HTML
    let formHtml = `<form class="custom-form ${layout}">\n`
    formHtml += `  <h2>${title}</h2>\n\n`

    fields.forEach((field, index) => {
      const id = `field-${index}`

      switch (field.type) {
        case "text":
        case "email":
        case "password":
          formHtml += `  <div class="form-group">\n`
          formHtml += `    <label for="${id}">${field.label}</label>\n`
          formHtml += `    <input type="${field.type}" id="${id}" placeholder="${field.placeholder}">\n`
          formHtml += `  </div>\n\n`
          break

        case "textarea":
          formHtml += `  <div class="form-group">\n`
          formHtml += `    <label for="${id}">${field.label}</label>\n`
          formHtml += `    <textarea id="${id}" placeholder="${field.placeholder}"></textarea>\n`
          formHtml += `  </div>\n\n`
          break

        case "checkbox":
          formHtml += `  <div class="form-group checkbox">\n`
          formHtml += `    <input type="checkbox" id="${id}">\n`
          formHtml += `    <label for="${id}">${field.label}</label>\n`
          formHtml += `  </div>\n\n`
          break

        case "radio":
          formHtml += `  <div class="form-group">\n`
          formHtml += `    <label>${field.label}</label>\n`
          formHtml += `    <div class="radio-group">\n`
          formHtml += `      <input type="radio" id="${id}-1" name="${id}" checked>\n`
          formHtml += `      <label for="${id}-1">Option 1</label>\n`
          formHtml += `    </div>\n`
          formHtml += `    <div class="radio-group">\n`
          formHtml += `      <input type="radio" id="${id}-2" name="${id}">\n`
          formHtml += `      <label for="${id}-2">Option 2</label>\n`
          formHtml += `    </div>\n`
          formHtml += `  </div>\n\n`
          break

        case "select":
          formHtml += `  <div class="form-group">\n`
          formHtml += `    <label for="${id}">${field.label}</label>\n`
          formHtml += `    <select id="${id}">\n`
          formHtml += `      <option value="" disabled selected>${field.placeholder}</option>\n`
          formHtml += `      <option value="option1">Option 1</option>\n`
          formHtml += `      <option value="option2">Option 2</option>\n`
          formHtml += `      <option value="option3">Option 3</option>\n`
          formHtml += `    </select>\n`
          formHtml += `  </div>\n\n`
          break
      }
    })

    formHtml += `  <button type="submit" class="submit-btn">${buttonText}</button>\n`
    formHtml += `</form>`

    // Generate CSS
    let formCss = `.custom-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.custom-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}`

    if (layout === "horizontal") {
      formCss += `

.form-group {
  display: flex;
  align-items: center;
}

.form-group label {
  width: 30%;
  margin-right: 10px;
}

.form-group input, .form-group select, .form-group textarea {
  width: 70%;
}

.form-group.checkbox {
  display: flex;
  align-items: center;
}

.form-group.checkbox input {
  width: auto;
  margin-right: 10px;
}`
    } else {
      formCss += `

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group.checkbox {
  display: flex;
  align-items: center;
}

.form-group.checkbox label {
  margin-bottom: 0;
  margin-left: 10px;
}`
    }

    formCss += `

.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.radio-group input {
  margin-right: 10px;
}

.custom-form input[type="text"],
.custom-form input[type="email"],
.custom-form input[type="password"],
.custom-form textarea,
.custom-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.custom-form textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-btn {
  background-color: ${buttonColor};
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: ${adjustColor(buttonColor, -20)};
}`

    // Update preview and code
    preview.innerHTML = formHtml
    htmlCode.textContent = formHtml
    cssCode.textContent = formCss

    // Apply CSS to preview
    const formElement = preview.querySelector("form")
    const formHeading = preview.querySelector("h2")
    const formGroups = preview.querySelectorAll(".form-group")
    const inputs = preview.querySelectorAll(
      'input[type="text"], input[type="email"], input[type="password"], textarea, select',
    )
    const submitBtn = preview.querySelector(".submit-btn")

    formElement.style.maxWidth = "500px"
    formElement.style.margin = "0 auto"
    formElement.style.padding = "20px"
    formElement.style.backgroundColor = "#f9f9f9"
    formElement.style.borderRadius = "8px"
    formElement.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"

    if (formHeading) {
      formHeading.style.marginTop = "0"
      formHeading.style.marginBottom = "20px"
      formHeading.style.textAlign = "center"
      formHeading.style.color = "#333"
    }

    formGroups.forEach((group) => {
      group.style.marginBottom = "15px"

      if (layout === "horizontal") {
        group.style.display = "flex"
        group.style.alignItems = "center"

        const label = group.querySelector("label")
        if (label && !group.classList.contains("checkbox")) {
          label.style.width = "30%"
          label.style.marginRight = "10px"
        }

        const input = group.querySelector("input, select, textarea")
        if (input && input.type !== "checkbox") {
          input.style.width = "70%"
        }
      } else {
        const label = group.querySelector("label")
        if (label && !group.classList.contains("checkbox")) {
          label.style.display = "block"
          label.style.marginBottom = "5px"
          label.style.fontWeight = "500"
        }
      }

      if (group.classList.contains("checkbox")) {
        group.style.display = "flex"
        group.style.alignItems = "center"

        const checkboxLabel = group.querySelector("label")
        if (checkboxLabel) {
          if (layout === "vertical") {
            checkboxLabel.style.marginBottom = "0"
            checkboxLabel.style.marginLeft = "10px"
          }
        }
      }
    })

    inputs.forEach((input) => {
      input.style.width = "100%"
      input.style.padding = "10px"
      input.style.border = "1px solid #ddd"
      input.style.borderRadius = "4px"
      input.style.fontSize = "16px"

      if (input.tagName.toLowerCase() === "textarea") {
        input.style.minHeight = "100px"
        input.style.resize = "vertical"
      }
    })

    if (submitBtn) {
      submitBtn.style.backgroundColor = buttonColor
      submitBtn.style.color = "white"
      submitBtn.style.border = "none"
      submitBtn.style.padding = "12px 20px"
      submitBtn.style.borderRadius = "4px"
      submitBtn.style.cursor = "pointer"
      submitBtn.style.fontSize = "16px"
      submitBtn.style.width = "100%"
      submitBtn.style.transition = "background-color 0.3s"

      submitBtn.addEventListener("mouseenter", () => {
        submitBtn.style.backgroundColor = adjustColor(buttonColor, -20)
      })

      submitBtn.addEventListener("mouseleave", () => {
        submitBtn.style.backgroundColor = buttonColor
      })
    }
  }

  // Helper function to darken/lighten color
  function adjustColor(color, amount) {
    return (
      "#" +
      color.replace(/^#/, "").replace(/../g, (color) => {
        const num = Math.min(Math.max(0, Number.parseInt(color, 16) + amount), 255)
        return num.toString(16).padStart(2, "0")
      })
    )
  }

  // Initialize form
  generateForm()
}

// Gradient Generator
function initGradientGenerator() {
  const gradientType = document.getElementById("gradient-type")
  const linearAngleGroup = document.getElementById("linear-angle-group")
  const radialPositionGroup = document.getElementById("radial-position-group")
  const angle = document.getElementById("gradient-angle")
  const position = document.getElementById("gradient-position")
  const color1 = document.getElementById("gradient-color-1")
  const color2 = document.getElementById("gradient-color-2")
  const color3 = document.getElementById("gradient-color-3")
  const useColor3 = document.getElementById("gradient-use-color-3")

  const preview = document.getElementById("gradient-preview")
  const cssCode = document.getElementById("gradient-css-code")

  const angleValue = document.getElementById("gradient-angle-value")

  // Show/hide controls based on gradient type
  gradientType.addEventListener("change", () => {
    if (gradientType.value === "linear") {
      linearAngleGroup.style.display = "block"
      radialPositionGroup.style.display = "none"
    } else {
      linearAngleGroup.style.display = "none"
      radialPositionGroup.style.display = "block"
    }
    updateGradientPreview()
  })

  // Update preview and code on input change
  ;[angle, position, color1, color2, color3, useColor3].forEach((input) => {
    input.addEventListener("input", updateGradientPreview)
  })

  angle.addEventListener("input", () => {
    angleValue.textContent = `${angle.value}deg`
  })

  function updateGradientPreview() {
    let gradientValue

    if (gradientType.value === "linear") {
      gradientValue = `linear-gradient(${angle.value}deg, ${color1.value}`
      gradientValue += `, ${color2.value}`

      if (useColor3.checked) {
        gradientValue += `, ${color3.value}`
      }

      gradientValue += ")"
    } else {
      gradientValue = `radial-gradient(circle at ${position.value}, ${color1.value}`
      gradientValue += `, ${color2.value}`

      if (useColor3.checked) {
        gradientValue += `, ${color3.value}`
      }

      gradientValue += ")"
    }

    // Update preview
    preview.style.background = gradientValue

    // Generate CSS code
    const css = `.gradient-element {
  background: ${gradientValue};
}`

    cssCode.textContent = css
  }

  // Initialize preview
  updateGradientPreview()
}

// Animation Generator
function initAnimationGenerator() {
  const animationName = document.getElementById("animation-name")
  const duration = document.getElementById("animation-duration")
  const timing = document.getElementById("animation-timing")
  const delay = document.getElementById("animation-delay")
  const iteration = document.getElementById("animation-iteration")
  const direction = document.getElementById("animation-direction")
  const fill = document.getElementById("animation-fill")
  const animationType = document.getElementById("animation-type")

  const preview = document.getElementById("animation-preview")
  const playBtn = document.getElementById("play-animation")
  const cssCode = document.getElementById("animation-css-code")

  const durationValue = document.getElementById("animation-duration-value")
  const delayValue = document.getElementById("animation-delay-value")

  // Update value displays on input change
  duration.addEventListener("input", () => {
    durationValue.textContent = `${duration.value}s`
    updateAnimationPreview()
  })

  delay.addEventListener("input", () => {
    delayValue.textContent = `${delay.value}s`
    updateAnimationPreview()
  })

  // Play animation on button click
  playBtn.addEventListener("click", playAnimation)

  // Update preview and code on input change
  ;[animationName, timing, iteration, direction, fill, animationType].forEach((input) => {
    input.addEventListener("change", updateAnimationPreview)
    input.addEventListener("input", updateAnimationPreview)
  })

  function playAnimation() {
    // Reset animation
    preview.style.animation = "none"

    // Trigger reflow
    void preview.offsetWidth

    // Apply animation
    const animationValue = `${animationName.value} ${duration.value}s ${timing.value} ${delay.value}s ${iteration.value} ${direction.value} ${fill.value}`
    preview.style.animation = animationValue

    // Add keyframes dynamically
    addKeyframes()
  }

  function addKeyframes() {
    // Remove any existing animation style
    const existingStyle = document.getElementById("animation-keyframes-style")
    if (existingStyle) {
      document.head.removeChild(existingStyle)
    }

    // Create new style element with keyframes
    const style = document.createElement("style")
    style.id = "animation-keyframes-style"

    let keyframes = `@keyframes ${animationName.value} {`

    switch (animationType.value) {
      case "fade":
        keyframes += `
  0% { opacity: 0; }
  100% { opacity: 1; }`
        break

      case "slide":
        keyframes += `
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }`
        break

      case "rotate":
        keyframes += `
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }`
        break

      case "scale":
        keyframes += `
  0% { transform: scale(0); }
  100% { transform: scale(1); }`
        break

      case "bounce":
        keyframes += `
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }`
        break

      case "pulse":
        keyframes += `
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }`
        break
    }

    keyframes += `
}`

    style.textContent = keyframes
    document.head.appendChild(style)
  }

  function updateAnimationPreview() {
    // Generate CSS code
    let css = `@keyframes ${animationName.value} {`

    switch (animationType.value) {
      case "fade":
        css += `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`
        break

      case "slide":
        css += `
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }`
        break

      case "rotate":
        css += `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`
        break

      case "scale":
        css += `
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }`
        break

      case "bounce":
        css += `
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }`
        break

      case "pulse":
        css += `
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }`
        break
    }

    css += `
}

.animated-element {
  animation: ${animationName.value} ${duration.value}s ${timing.value} ${delay.value}s ${iteration.value} ${direction.value} ${fill.value};
}`

    cssCode.textContent = css

    // Add keyframes to document
    addKeyframes()
  }

  // Initialize preview
  updateAnimationPreview()
}

// Filter Generator
function initFilterGenerator() {
  const blur = document.getElementById("filter-blur")
  const brightness = document.getElementById("filter-brightness")
  const contrast = document.getElementById("filter-contrast")
  const grayscale = document.getElementById("filter-grayscale")
  const hueRotate = document.getElementById("filter-hue-rotate")
  const invert = document.getElementById("filter-invert")
  const opacity = document.getElementById("filter-opacity")
  const saturate = document.getElementById("filter-saturate")
  const sepia = document.getElementById("filter-sepia")
  const resetBtn = document.getElementById("reset-filters")

  const preview = document.getElementById("filter-preview")
  const cssCode = document.getElementById("filter-css-code")

  const blurValue = document.getElementById("filter-blur-value")
  const brightnessValue = document.getElementById("filter-brightness-value")
  const contrastValue = document.getElementById("filter-contrast-value")
  const grayscaleValue = document.getElementById("filter-grayscale-value")
  const hueRotateValue = document.getElementById("filter-hue-rotate-value")
  const invertValue = document.getElementById("filter-invert-value")
  const opacityValue = document.getElementById("filter-opacity-value")
  const saturateValue = document.getElementById("filter-saturate-value")
  const sepiaValue = document.getElementById("filter-sepia-value")

  // Update value displays on input change
  blur.addEventListener("input", () => {
    blurValue.textContent = `${blur.value}px`
    updateFilterPreview()
  })

  brightness.addEventListener("input", () => {
    brightnessValue.textContent = `${brightness.value}%`
    updateFilterPreview()
  })

  contrast.addEventListener("input", () => {
    contrastValue.textContent = `${contrast.value}%`
    updateFilterPreview()
  })

  grayscale.addEventListener("input", () => {
    grayscaleValue.textContent = `${grayscale.value}%`
    updateFilterPreview()
  })

  hueRotate.addEventListener("input", () => {
    hueRotateValue.textContent = `${hueRotate.value}deg`
    updateFilterPreview()
  })

  invert.addEventListener("input", () => {
    invertValue.textContent = `${invert.value}%`
    updateFilterPreview()
  })

  opacity.addEventListener("input", () => {
    opacityValue.textContent = `${opacity.value}%`
    updateFilterPreview()
  })

  saturate.addEventListener("input", () => {
    saturateValue.textContent = `${saturate.value}%`
    updateFilterPreview()
  })

  sepia.addEventListener("input", () => {
    sepiaValue.textContent = `${sepia.value}%`
    updateFilterPreview()
  })

  // Reset filters on button click
  resetBtn.addEventListener("click", resetFilters)

  function resetFilters() {
    blur.value = 0
    brightness.value = 100
    contrast.value = 100
    grayscale.value = 0
    hueRotate.value = 0
    invert.value = 0
    opacity.value = 100
    saturate.value = 100
    sepia.value = 0

    blurValue.textContent = "0px"
    brightnessValue.textContent = "100%"
    contrastValue.textContent = "100%"
    grayscaleValue.textContent = "0%"
    hueRotateValue.textContent = "0deg"
    invertValue.textContent = "0%"
    opacityValue.textContent = "100%"
    saturateValue.textContent = "100%"
    sepiaValue.textContent = "0%"

    updateFilterPreview()
  }

  function updateFilterPreview() {
    // Create filter value
    let filterValue = ""

    if (Number.parseInt(blur.value) > 0) {
      filterValue += `blur(${blur.value}px) `
    }

    if (Number.parseInt(brightness.value) !== 100) {
      filterValue += `brightness(${brightness.value}%) `
    }

    if (Number.parseInt(contrast.value) !== 100) {
      filterValue += `contrast(${contrast.value}%) `
    }

    if (Number.parseInt(grayscale.value) > 0) {
      filterValue += `grayscale(${grayscale.value}%) `
    }

    if (Number.parseInt(hueRotate.value) > 0) {
      filterValue += `hue-rotate(${hueRotate.value}deg) `
    }

    if (Number.parseInt(invert.value) > 0) {
      filterValue += `invert(${invert.value}%) `
    }

    if (Number.parseInt(opacity.value) !== 100) {
      filterValue += `opacity(${opacity.value}%) `
    }

    if (Number.parseInt(saturate.value) !== 100) {
      filterValue += `saturate(${saturate.value}%) `
    }

    if (Number.parseInt(sepia.value) > 0) {
      filterValue += `sepia(${sepia.value}%) `
    }

    // Update preview
    preview.style.filter = filterValue.trim()

    // Generate CSS code
    const css = `.filtered-element {
  filter: ${filterValue.trim()};
}`

    cssCode.textContent = css
  }

  // Initialize preview
  updateFilterPreview()
}

// Transform Generator
function initTransformGenerator() {
  const scaleX = document.getElementById("transform-scale-x")
  const scaleY = document.getElementById("transform-scale-y")
  const rotate = document.getElementById("transform-rotate")
  const translateX = document.getElementById("transform-translate-x")
  const translateY = document.getElementById("transform-translate-y")
  const skewX = document.getElementById("transform-skew-x")
  const skewY = document.getElementById("transform-skew-y")
  const origin = document.getElementById("transform-origin")
  const resetBtn = document.getElementById("reset-transform")

  const preview = document.getElementById("transform-preview")
  const cssCode = document.getElementById("transform-css-code")

  const scaleXValue = document.getElementById("transform-scale-x-value")
  const scaleYValue = document.getElementById("transform-scale-y-value")
  const rotateValue = document.getElementById("transform-rotate-value")
  const translateXValue = document.getElementById("transform-translate-x-value")
  const translateYValue = document.getElementById("transform-translate-y-value")
  const skewXValue = document.getElementById("transform-skew-x-value")
  const skewYValue = document.getElementById("transform-skew-y-value")

  // Update value displays on input change
  scaleX.addEventListener("input", () => {
    scaleXValue.textContent = scaleX.value
    updateTransformPreview()
  })

  scaleY.addEventListener("input", () => {
    scaleYValue.textContent = scaleY.value
    updateTransformPreview()
  })

  rotate.addEventListener("input", () => {
    rotateValue.textContent = `${rotate.value}deg`
    updateTransformPreview()
  })

  translateX.addEventListener("input", () => {
    translateXValue.textContent = `${translateX.value}px`
    updateTransformPreview()
  })

  translateY.addEventListener("input", () => {
    translateYValue.textContent = `${translateY.value}px`
    updateTransformPreview()
  })

  skewX.addEventListener("input", () => {
    skewXValue.textContent = `${skewX.value}deg`
    updateTransformPreview()
  })

  skewY.addEventListener("input", () => {
    skewYValue.textContent = `${skewY.value}deg`
    updateTransformPreview()
  })

  origin.addEventListener("change", updateTransformPreview)

  // Reset transform on button click
  resetBtn.addEventListener("click", resetTransform)

  function resetTransform() {
    scaleX.value = 1
    scaleY.value = 1
    rotate.value = 0
    translateX.value = 0
    translateY.value = 0
    skewX.value = 0
    skewY.value = 0
    origin.value = "center"

    scaleXValue.textContent = "1"
    scaleYValue.textContent = "1"
    rotateValue.textContent = "0deg"
    translateXValue.textContent = "0px"
    translateYValue.textContent = "0px"
    skewXValue.textContent = "0deg"
    skewYValue.textContent = "0deg"

    updateTransformPreview()
  }

  function updateTransformPreview() {
    // Create transform value
    let transformValue = ""

    if (scaleX.value !== "1" || scaleY.value !== "1") {
      transformValue += `scale(${scaleX.value}, ${scaleY.value}) `
    }

    if (rotate.value !== "0") {
      transformValue += `rotate(${rotate.value}deg) `
    }

    if (translateX.value !== "0" || translateY.value !== "0") {
      transformValue += `translate(${translateX.value}px, ${translateY.value}px) `
    }

    if (skewX.value !== "0" || skewY.value !== "0") {
      transformValue += `skew(${skewX.value}deg, ${skewY.value}deg) `
    }

    // Update preview
    preview.style.transform = transformValue.trim()
    preview.style.transformOrigin = origin.value

    // Generate CSS code
    const css = `.transformed-element {
  transform: ${transformValue.trim()};
  transform-origin: ${origin.value};
}`

    cssCode.textContent = css
  }

  // Initialize preview
  updateTransformPreview()
}

// Flexbox Generator
function initFlexboxGenerator() {
  const flexDirection = document.getElementById("flex-direction")
  const flexWrap = document.getElementById("flex-wrap")
  const justifyContent = document.getElementById("justify-content")
  const alignItems = document.getElementById("align-items")
  const alignContent = document.getElementById("align-content")
  const flexGap = document.getElementById("flex-gap")
  const flexItems = document.getElementById("flex-items")
  const generateBtn = document.getElementById("generate-flexbox")

  const preview = document.getElementById("flexbox-preview")
  const cssCode = document.getElementById("flexbox-css-code")
  const htmlCode = document.getElementById("flexbox-html-code")

  const flexGapValue = document.getElementById("flex-gap-value")

  // Update value displays on input change
  flexGap.addEventListener("input", () => {
    flexGapValue.textContent = `${flexGap.value}px`
  })

  // Generate flexbox on button click
  generateBtn.addEventListener("click", generateFlexbox)

  function generateFlexbox() {
    const direction = flexDirection.value
    const wrap = flexWrap.value
    const justify = justifyContent.value
    const alignI = alignItems.value
    const alignC = alignContent.value
    const gap = flexGap.value
    const items = Number.parseInt(flexItems.value)

    // Generate HTML
    let flexboxHtml = '<div class="flex-container">\n'

    for (let i = 0; i < items; i++) {
      flexboxHtml += `  <div class="flex-item">Item ${i + 1}</div>\n`
    }

    flexboxHtml += "</div>"

    // Generate CSS
    const flexboxCss = `.flex-container {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${alignI};
  align-content: ${alignC};
  gap: ${gap}px;
}

.flex-item {
  padding: 20px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 5px;
}`

    // Update preview and code
    preview.innerHTML = flexboxHtml
    htmlCode.textContent = flexboxHtml
    cssCode.textContent = flexboxCss

    // Apply CSS to preview
    const container = preview.querySelector(".flex-container")

    container.style.display = "flex"
    container.style.flexDirection = direction
    container.style.flexWrap = wrap
    container.style.justifyContent = justify
    container.style.alignItems = alignI
    container.style.alignContent = alignC
    container.style.gap = `${gap}px`
  }

  // Initialize flexbox
  generateFlexbox()
}

// Grid Generator
function initGridGenerator() {
  const gridColumns = document.getElementById("grid-columns")
  const gridRows = document.getElementById("grid-rows")
  const columnGap = document.getElementById("grid-column-gap")
  const rowGap = document.getElementById("grid-row-gap")
  const justifyItems = document.getElementById("justify-items")
  const alignItems = document.getElementById("align-grid-items")
  const gridItems = document.getElementById("grid-items")
  const generateBtn = document.getElementById("generate-grid")

  const preview = document.getElementById("grid-preview")
  const cssCode = document.getElementById("grid-css-code")
  const htmlCode = document.getElementById("grid-html-code")

  const columnGapValue = document.getElementById("grid-column-gap-value")
  const rowGapValue = document.getElementById("grid-row-gap-value")

  // Update value displays on input change
  columnGap.addEventListener("input", () => {
    columnGapValue.textContent = `${columnGap.value}px`
  })

  rowGap.addEventListener("input", () => {
    rowGapValue.textContent = `${rowGap.value}px`
  })

  // Generate grid on button click
  generateBtn.addEventListener("click", generateGrid)

  function generateGrid() {
    const columns = gridColumns.value
    const rows = gridRows.value
    const colGap = columnGap.value
    const rGap = rowGap.value
    const justifyI = justifyItems.value
    const alignI = alignItems.value
    const items = Number.parseInt(gridItems.value)

    // Generate HTML
    let gridHtml = '<div class="grid-container">\n'

    for (let i = 0; i < items; i++) {
      gridHtml += `  <div class="grid-item">Item ${i + 1}</div>\n`
    }

    gridHtml += "</div>"

    // Generate CSS
    let gridCss = `.grid-container {\n`
    gridCss += `  display: grid;\n`
    gridCss += `  grid-template-columns: ${columns};\n`
    gridCss += `  grid-template-rows: ${rows};\n`
    gridCss += `  column-gap: ${colGap}px;\n`
    gridCss += `  row-gap: ${rGap}px;\n`
    gridCss += `  justify-items: ${justifyI};\n`
    gridCss += `  align-items: ${alignI};\n`
    gridCss += `}\n\n`

    gridCss += `.grid-item {\n`
    gridCss += `  padding: 20px;\n`
    gridCss += `  background-color: #3498db;\n`
    gridCss += `  color: white;\n`
    gridCss += `  text-align: center;\n`
    gridCss += `  border-radius: 5px;\n`
    gridCss += `}`

    // Update preview and code
    preview.innerHTML = gridHtml
    htmlCode.textContent = gridHtml
    cssCode.textContent = gridCss

    // Apply CSS to preview
    const container = preview.querySelector(".grid-container")

    container.style.display = "grid"
    container.style.gridTemplateColumns = columns
    container.style.gridTemplateRows = rows
    container.style.columnGap = `${colGap}px`
    container.style.rowGap = `${rGap}px`
    container.style.justifyItems = justifyI
    container.style.alignItems = alignI
  }

  // Initialize grid
  generateGrid()
}

// Responsive Design Tool
function initResponsiveTool() {
  const responsiveType = document.getElementById("responsive-type")
  const mediaQueryControls = document.getElementById("media-query-controls")
  const containerQueryControls = document.getElementById("container-query-controls")
  const fluidTypographyControls = document.getElementById("fluid-typography-controls")
  const generateBtn = document.getElementById("generate-responsive")

  const preview = document.getElementById("responsive-preview")
  const cssCode = document.getElementById("responsive-css-code")
  const htmlCode = document.getElementById("responsive-html-code")

  // Show/hide controls based on responsive type
  responsiveType.addEventListener("change", () => {
    mediaQueryControls.style.display = "none"
    containerQueryControls.style.display = "none"
    fluidTypographyControls.style.display = "none"

    switch (responsiveType.value) {
      case "media-query":
        mediaQueryControls.style.display = "block"
        break
      case "container-query":
        containerQueryControls.style.display = "block"
        break
      case "fluid-typography":
        fluidTypographyControls.style.display = "block"
        break
    }

    // Update preview when changing type
    generateResponsiveCode()
  })

  // Update value displays for fluid typography
  const minFontSize = document.getElementById("min-font-size")
  const maxFontSize = document.getElementById("max-font-size")
  const minViewportWidth = document.getElementById("min-viewport-width")
  const maxViewportWidth = document.getElementById("max-viewport-width")

  const minFontSizeValue = document.getElementById("min-font-size-value")
  const maxFontSizeValue = document.getElementById("max-font-size-value")
  const minViewportWidthValue = document.getElementById("min-viewport-width-value")
  const maxViewportWidthValue = document.getElementById("max-viewport-width-value")

  minFontSize.addEventListener("input", () => {
    minFontSizeValue.textContent = `${minFontSize.value}px`
    generateResponsiveCode()
  })

  maxFontSize.addEventListener("input", () => {
    maxFontSizeValue.textContent = `${maxFontSize.value}px`
    generateResponsiveCode()
  })

  minViewportWidth.addEventListener("input", () => {
    minViewportWidthValue.textContent = `${minViewportWidth.value}px`
    generateResponsiveCode()
  })

  maxViewportWidth.addEventListener("input", () => {
    maxViewportWidthValue.textContent = `${maxViewportWidth.value}px`
    generateResponsiveCode()
  })

  // Add event listeners for media query checkboxes
  document.getElementById("breakpoint-sm").addEventListener("change", generateResponsiveCode)
  document.getElementById("breakpoint-md").addEventListener("change", generateResponsiveCode)
  document.getElementById("breakpoint-lg").addEventListener("change", generateResponsiveCode)
  document.getElementById("breakpoint-xl").addEventListener("change", generateResponsiveCode)

  // Add event listeners for container query checkboxes
  document.getElementById("container-sm").addEventListener("change", generateResponsiveCode)
  document.getElementById("container-md").addEventListener("change", generateResponsiveCode)
  document.getElementById("container-lg").addEventListener("change", generateResponsiveCode)

  // Generate responsive code on button click
  generateBtn.addEventListener("click", generateResponsiveCode)

  // Remove any existing responsive styles
  function cleanupStyles() {
    const existingStyle = document.getElementById("responsive-preview-style")
    if (existingStyle) {
      document.head.removeChild(existingStyle)
    }
  }

  function generateResponsiveCode() {
    cleanupStyles()

    let css = ""
    let html = ""

    switch (responsiveType.value) {
      case "media-query":
        const breakpointSm = document.getElementById("breakpoint-sm").checked
        const breakpointMd = document.getElementById("breakpoint-md").checked
        const breakpointLg = document.getElementById("breakpoint-lg").checked
        const breakpointXl = document.getElementById("breakpoint-xl").checked

        html = '<div class="responsive-container">\n'
        html += '  <div class="responsive-element">Responsive Element</div>\n'
        html += "</div>"

        css = `.responsive-element {
  padding: 20px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 5px;
  width: 100%;
}`

        if (breakpointSm) {
          css += `

/* Small devices (576px and up) */
@media (min-width: 576px) {
  .responsive-element {
    background-color: #2ecc71;
    width: 80%;
    margin: 0 auto;
  }
}`
        }

        if (breakpointMd) {
          css += `

/* Medium devices (768px and up) */
@media (min-width: 768px) {
  .responsive-element {
    background-color: #f1c40f;
    width: 70%;
    margin: 0 auto;
  }
}`
        }

        if (breakpointLg) {
          css += `

/* Large devices (992px and up) */
@media (min-width: 992px) {
  .responsive-element {
    background-color: #e74c3c;
    width: 60%;
    margin: 0 auto;
  }
}`
        }

        if (breakpointXl) {
          css += `

/* Extra large devices (1200px and up) */
@media (min-width: 1200px) {
  .responsive-element {
    background-color: #9b59b6;
    width: 50%;
    margin: 0 auto;
  }
}`
        }
        break

      case "container-query":
        const containerSm = document.getElementById("container-sm").checked
        const containerMd = document.getElementById("container-md").checked
        const containerLg = document.getElementById("container-lg").checked

        html = '<div class="container">\n'
        html += '  <div class="card">Container Query Demo</div>\n'
        html += "</div>"

        css = `.container {
  resize: horizontal;
  overflow: auto;
  border: 2px dashed #ccc;
  padding: 20px;
  max-width: 100%;
  min-width: 200px;
  container-type: inline-size;
}

.card {
  padding: 20px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 5px;
}

/* Container queries require @container rule */
/* Note: This is a newer feature and may not be supported in all browsers */`

        if (containerSm) {
          css += `

@container (min-width: 400px) {
  .card {
    background-color: #2ecc71;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}`
        }

        if (containerMd) {
          css += `

@container (min-width: 600px) {
  .card {
    background-color: #f1c40f;
    padding: 30px;
    font-size: 1.2em;
  }
}`
        }

        if (containerLg) {
          css += `

@container (min-width: 800px) {
  .card {
    background-color: #e74c3c;
    padding: 40px;
    font-size: 1.5em;
    border-radius: 10px;
  }
}`
        }
        break

      case "fluid-typography":
        const minFont = minFontSize.value
        const maxFont = maxFontSize.value
        const minWidth = minViewportWidth.value
        const maxWidth = maxViewportWidth.value

        html = '<div class="fluid-text-container">\n'
        html += '  <h1 class="fluid-heading">Fluid Typography</h1>\n'
        html += '  <p class="fluid-text">This text will scale smoothly between viewport widths.</p>\n'
        html += "</div>"

        css = `/* Fluid Typography using clamp() */

.fluid-heading {
  /* clamp(min, preferred, max) */
  font-size: clamp(${minFont}px, calc(${minFont}px + (${maxFont} - ${minFont}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))), ${maxFont}px);
  margin-bottom: 1rem;
  color: #3498db;
}

.fluid-text {
  font-size: clamp(${Math.max(12, minFont - 4)}px, calc(${Math.max(12, minFont - 4)}px + (${maxFont - 4} - ${Math.max(12, minFont - 4)}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))), ${maxFont - 4}px);
  line-height: 1.5;
  color: #333;
}

/* Alternative approach using viewport units */
/* .fluid-text-alt {
  font-size: calc(${minFont}px + (${maxFont} - ${minFont}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})));
} */`
        break
    }

    // Update preview and code
    preview.innerHTML = html
    htmlCode.textContent = html
    cssCode.textContent = css

    // Apply CSS to preview
    const style = document.createElement("style")
    style.id = "responsive-preview-style"
    style.textContent = css
    document.head.appendChild(style)
  }

  // Initialize responsive tool
  generateResponsiveCode()
}

// SVG Icon Generator
function initSvgGenerator() {
  const svgType = document.getElementById("svg-type")
  const svgSize = document.getElementById("svg-size")
  const svgStrokeWidth = document.getElementById("svg-stroke-width")
  const svgColor = document.getElementById("svg-color")
  const svgBgColor = document.getElementById("svg-bg-color")
  const svgBgEnabled = document.getElementById("svg-bg-enabled")
  const svgBorderRadius = document.getElementById("svg-border-radius")

  const preview = document.getElementById("svg-preview")
  const svgCode = document.getElementById("svg-code")
  const svgCssCode = document.getElementById("svg-css-code")

  const svgSizeValue = document.getElementById("svg-size-value")
  const svgStrokeWidthValue = document.getElementById("svg-stroke-width-value")
  const svgBorderRadiusValue = document.getElementById("svg-border-radius-value")

  // Update value displays on input change
  svgSize.addEventListener("input", () => {
    svgSizeValue.textContent = `${svgSize.value}px`
    updateSvgPreview()
  })

  svgStrokeWidth.addEventListener("input", () => {
    svgStrokeWidthValue.textContent = `${svgStrokeWidth.value}px`
    updateSvgPreview()
  })

  svgBorderRadius.addEventListener("input", () => {
    svgBorderRadiusValue.textContent = `${svgBorderRadius.value}%`
    updateSvgPreview()
  })

  // Update preview and code on input change
  ;[svgType, svgColor, svgBgColor, svgBgEnabled].forEach((input) => {
    input.addEventListener("input", updateSvgPreview)
    input.addEventListener("change", updateSvgPreview)
  })

  function updateSvgPreview() {
    const size = Number.parseInt(svgSize.value)
    const strokeWidth = Number.parseInt(svgStrokeWidth.value)
    const color = svgColor.value
    const bgColor = svgBgColor.value
    const bgEnabled = svgBgEnabled.checked
    const borderRadius = Number.parseInt(svgBorderRadius.value)
    const type = svgType.value

    // Create SVG based on type
    let svgContent = ""

    switch (type) {
      case "arrow":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
</svg>`
        break
      case "hamburger":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>`
        break
      case "close":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`
        break
      case "check":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>`
        break
      case "heart":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>`
        break
      case "star":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`
        break
      case "circle":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
</svg>`
        break
      case "square":
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
</svg>`
        break
    }

    // Create a wrapper div for the SVG
    const wrapperDiv = document.createElement("div")
    wrapperDiv.className = "svg-wrapper"
    wrapperDiv.innerHTML = svgContent

    // Apply background if enabled
    if (bgEnabled) {
      wrapperDiv.style.backgroundColor = bgColor
      wrapperDiv.style.borderRadius = `${borderRadius}%`
      wrapperDiv.style.padding = "5px"
      wrapperDiv.style.display = "inline-block"
    }

    // Update preview
    preview.innerHTML = ""
    preview.appendChild(wrapperDiv)

    // Generate SVG code
    svgCode.textContent = svgContent

    // Generate CSS code
    let css = `.icon-${type} {
  width: ${size}px;
  height: ${size}px;`

    if (bgEnabled) {
      css += `
  background-color: ${bgColor};
  border-radius: ${borderRadius}%;
  padding: 5px;
  display: inline-block;`
    }

    css += `
}

.icon-${type} svg {
  stroke: ${color};
  stroke-width: ${strokeWidth}px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}`

    svgCssCode.textContent = css
  }

  // Initialize preview
  updateSvgPreview()
}
