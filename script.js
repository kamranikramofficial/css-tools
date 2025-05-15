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

  // Initialize all tools
  initButtonGenerator()
  initBoxShadowMaker()
  initHoverEffectMaker()
  initColorPicker()
  initTableGenerator()
  initFormGenerator()
  initGradientGenerator()
  initAnimationGenerator()
  initFilterGenerator()
  initTransformGenerator()
  initFlexboxGenerator()
  initGridGenerator()
  initResponsiveDesign()
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
    let css = `.button {\n`
    css += `  padding: ${btnPadding.value}px 24px;\n`
    css += `  background-color: ${btnBgColor.value};\n`
    css += `  color: ${btnTextColor.value};\n`
    css += `  border: none;\n`
    css += `  border-radius: ${btnBorderRadius.value}px;\n`
    css += `  cursor: pointer;\n`
    css += `  font-size: 16px;\n`
    css += `  transition: all 0.3s ease;\n`
    css += `}\n\n`

    css += `.button:hover {\n`

    switch (btnHoverEffect.value) {
      case "scale":
        css += `  transform: scale(1.1);\n`
        break
      case "bg-change":
        css += `  background-color: ${btnHoverBgColor.value};\n`
        break
      case "shadow":
        css += `  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n`
        break
      case "border":
        css += `  border: 2px solid ${btnHoverBgColor.value};\n`
        break
    }

    css += `}`

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
    let css = `.element {\n`
    css += `  box-shadow: ${shadowValue};\n`
    css += `}`

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

  function updateHoverPreview() {
    // Update value displays
    transitionValue.textContent = `${transition.value}s`
    scaleDisplay.textContent = scaleValue.value

    // Update preview
    preview.style.backgroundColor = bgColor.value
    preview.style.color = textColor.value
    preview.style.transition = `all ${transition.value}s`

    // Set up hover effects for the preview
    preview.onmouseenter = function () {
      if (scaleCheck.checked) {
        this.style.transform = `scale(${scaleValue.value})`
      }
      if (bgChangeCheck.checked) {
        this.style.backgroundColor = bgChangeColor.value
      }
      if (textChangeCheck.checked) {
        this.style.color = textChangeColor.value
      }
      if (shadowCheck.checked) {
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"
      }
    }

    preview.onmouseleave = function () {
      this.style.transform = ""
      this.style.backgroundColor = bgColor.value
      this.style.color = textColor.value
      this.style.boxShadow = ""
    }

    // Generate CSS code
    let css = `.hover-element {\n`
    css += `  padding: 20px;\n`
    css += `  background-color: ${bgColor.value};\n`
    css += `  color: ${textColor.value};\n`
    css += `  border-radius: 5px;\n`
    css += `  cursor: pointer;\n`
    css += `  transition: all ${transition.value}s;\n`
    css += `}\n\n`

    css += `.hover-element:hover {\n`

    if (scaleCheck.checked) {
      css += `  transform: scale(${scaleValue.value});\n`
    }

    if (bgChangeCheck.checked) {
      css += `  background-color: ${bgChangeColor.value};\n`
    }

    if (textChangeCheck.checked) {
      css += `  color: ${textChangeColor.value};\n`
    }

    if (shadowCheck.checked) {
      css += `  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n`
    }

    css += `}`

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
    let tableCss = `.custom-table {\n`
    tableCss += `  border-collapse: collapse;\n`
    tableCss += `  width: 100%;\n`
    tableCss += `}\n\n`

    tableCss += `.custom-table th, .custom-table td {\n`
    tableCss += `  padding: ${cellPadding}px;\n`

    if (borderWidth > 0) {
      tableCss += `  border: ${borderWidth}px solid ${borderColor};\n`
    }

    tableCss += `}\n\n`

    tableCss += `.custom-table th {\n`
    tableCss += `  background-color: #f2f2f2;\n`
    tableCss += `  font-weight: bold;\n`
    tableCss += `  text-align: left;\n`
    tableCss += `}\n`

    if (isStriped) {
      tableCss += `\n.custom-table tbody tr:nth-child(even) {\n`
      tableCss += `  background-color: #f9f9f9;\n`
      tableCss += `}\n`
    }

    if (hasHover) {
      tableCss += `\n.custom-table tbody tr:hover {\n`
      tableCss += `  background-color: #f5f5f5;\n`
      tableCss += `}\n`
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
    let formCss = `.custom-form {\n`
    formCss += `  max-width: 500px;\n`
    formCss += `  margin: 0 auto;\n`
    formCss += `  padding: 20px;\n`
    formCss += `  background-color: #f9f9f9;\n`
    formCss += `  border-radius: 8px;\n`
    formCss += `  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n`
    formCss += `}\n\n`

    formCss += `.custom-form h2 {\n`
    formCss += `  margin-top: 0;\n`
    formCss += `  margin-bottom: 20px;\n`
    formCss += `  text-align: center;\n`
    formCss += `  color: #333;\n`
    formCss += `}\n\n`

    formCss += `.form-group {\n`
    formCss += `  margin-bottom: 15px;\n`
    formCss += `}\n\n`

    if (layout === "horizontal") {
      formCss += `.form-group {\n`
      formCss += `  display: flex;\n`
      formCss += `  align-items: center;\n`
      formCss += `}\n\n`

      formCss += `.form-group label {\n`
      formCss += `  width: 30%;\n`
      formCss += `  margin-right: 10px;\n`
      formCss += `}\n\n`

      formCss += `.form-group input, .form-group select, .form-group textarea {\n`
      formCss += `  width: 70%;\n`
      formCss += `}\n\n`

      formCss += `.form-group.checkbox {\n`
      formCss += `  display: flex;\n`
      formCss += `  align-items: center;\n`
      formCss += `}\n\n`

      formCss += `.form-group.checkbox input {\n`
      formCss += `  width: auto;\n`
      formCss += `  margin-right: 10px;\n`
      formCss += `}\n\n`
    } else {
      formCss += `.form-group label {\n`
      formCss += `  display: block;\n`
      formCss += `  margin-bottom: 5px;\n`
      formCss += `  font-weight: 500;\n`
      formCss += `}\n\n`

      formCss += `.form-group.checkbox {\n`
      formCss += `  display: flex;\n`
      formCss += `  align-items: center;\n`
      formCss += `}\n\n`

      formCss += `.form-group.checkbox label {\n`
      formCss += `  margin-bottom: 0;\n`
      formCss += `  margin-left: 10px;\n`
      formCss += `}\n\n`
    }

    formCss += `.radio-group {\n`
    formCss += `  display: flex;\n`
    formCss += `  align-items: center;\n`
    formCss += `  margin-bottom: 5px;\n`
    formCss += `}\n\n`

    formCss += `.radio-group input {\n`
    formCss += `  margin-right: 10px;\n`
    formCss += `}\n\n`

    formCss += `.custom-form input[type="text"],\n`
    formCss += `.custom-form input[type="email"],\n`
    formCss += `.custom-form input[type="password"],\n`
    formCss += `.custom-form textarea,\n`
    formCss += `.custom-form select {\n`
    formCss += `  width: 100%;\n`
    formCss += `  padding: 10px;\n`
    formCss += `  border: 1px solid #ddd;\n`
    formCss += `  border-radius: 4px;\n`
    formCss += `  font-size: 16px;\n`
    formCss += `}\n\n`

    formCss += `.custom-form textarea {\n`
    formCss += `  min-height: 100px;\n`
    formCss += `  resize: vertical;\n`
    formCss += `}\n\n`

    formCss += `.submit-btn {\n`
    formCss += `  background-color: ${buttonColor};\n`
    formCss += `  color: white;\n`
    formCss += `  border: none;\n`
    formCss += `  padding: 12px 20px;\n`
    formCss += `  border-radius: 4px;\n`
    formCss += `  cursor: pointer;\n`
    formCss += `  font-size: 16px;\n`
    formCss += `  width: 100%;\n`
    formCss += `  transition: background-color 0.3s;\n`
    formCss += `}\n\n`

    formCss += `.submit-btn:hover {\n`
    formCss += `  background-color: ${adjustColor(buttonColor, -20)};\n`
    formCss += `}`

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
  const linearControls = document.getElementById("linear-controls")
  const radialControls = document.getElementById("radial-controls")
  const gradientAngle = document.getElementById("gradient-angle")
  const gradientAngleValue = document.getElementById("gradient-angle-value")
  const radialShape = document.getElementById("radial-shape")
  const radialPosition = document.getElementById("radial-position")
  const addStopBtn = document.getElementById("add-stop")
  const gradientStops = document.getElementById("gradient-stops")
  const preview = document.getElementById("gradient-preview")
  const cssCode = document.getElementById("gradient-css-code")

  // Toggle controls based on gradient type
  gradientType.addEventListener("change", () => {
    if (gradientType.value === "linear") {
      linearControls.style.display = "block"
      radialControls.style.display = "none"
    } else {
      linearControls.style.display = "none"
      radialControls.style.display = "block"
    }
    updateGradientPreview()
  })

  // Update angle value display
  gradientAngle.addEventListener("input", () => {
    gradientAngleValue.textContent = `${gradientAngle.value}deg`
    updateGradientPreview()
  })

  // Add new color stop
  addStopBtn.addEventListener("click", () => {
    const stopDiv = document.createElement("div")
    stopDiv.className = "gradient-stop"

    stopDiv.innerHTML = `
            <input type="color" class="stop-color" value="#4a6ee0">
            <input type="range" class="stop-position" min="0" max="100" value="50">
            <span class="stop-position-value">50%</span>
            <button class="remove-stop"><i class="fas fa-times"></i></button>
        `

    const stops = gradientStops.querySelectorAll(".gradient-stop")
    stops[stops.length - 1].insertAdjacentElement("afterend", stopDiv)

    // Add event listeners
    const colorInput = stopDiv.querySelector(".stop-color")
    const positionInput = stopDiv.querySelector(".stop-position")
    const positionValue = stopDiv.querySelector(".stop-position-value")
    const removeBtn = stopDiv.querySelector(".remove-stop")

    colorInput.addEventListener("input", updateGradientPreview)

    positionInput.addEventListener("input", () => {
      positionValue.textContent = `${positionInput.value}%`
      updateGradientPreview()
    })

    removeBtn.addEventListener("click", () => {
      if (gradientStops.querySelectorAll(".gradient-stop").length > 2) {
        stopDiv.remove()
        updateGradientPreview()
      }
    })

    updateGradientPreview()
  })

  // Setup initial color stop events
  const initialStops = gradientStops.querySelectorAll(".gradient-stop")
  initialStops.forEach((stopDiv) => {
    const colorInput = stopDiv.querySelector(".stop-color")
    const positionInput = stopDiv.querySelector(".stop-position")
    const positionValue = stopDiv.querySelector(".stop-position-value")
    const removeBtn = stopDiv.querySelector(".remove-stop")

    colorInput.addEventListener("input", updateGradientPreview)

    positionInput.addEventListener("input", () => {
      positionValue.textContent = `${positionInput.value}%`
      updateGradientPreview()
    })

    removeBtn.addEventListener("click", () => {
      if (gradientStops.querySelectorAll(".gradient-stop").length > 2) {
        stopDiv.remove()
        updateGradientPreview()
      }
    })
  })

  // Add events for radial controls
  ;[radialShape, radialPosition].forEach((input) => {
    input.addEventListener("change", updateGradientPreview)
  })

  function updateGradientPreview() {
    // Get all stops
    const stops = gradientStops.querySelectorAll(".gradient-stop")
    const colorStops = []

    stops.forEach((stop) => {
      const color = stop.querySelector(".stop-color").value
      const position = stop.querySelector(".stop-position").value
      colorStops.push(`${color} ${position}%`)
    })

    let gradientCSS = ""

    if (gradientType.value === "linear") {
      gradientCSS = `linear-gradient(${gradientAngle.value}deg, ${colorStops.join(", ")})`
    } else {
      const shape = radialShape.value
      const position = radialPosition.value
      gradientCSS = `radial-gradient(${shape} at ${position}, ${colorStops.join(", ")})`
    }

    // Update preview
    preview.style.backgroundImage = gradientCSS

    // Generate CSS code
    const css = `.element {\n  background-image: ${gradientCSS};\n}`
    cssCode.textContent = css
  }

  // Initialize gradient
  updateGradientPreview()
}

// Animation Generator
function initAnimationGenerator() {
  const animationName = document.getElementById("animation-name")
  const animationDuration = document.getElementById("animation-duration")
  const animationDurationValue = document.getElementById("animation-duration-value")
  const animationTiming = document.getElementById("animation-timing")
  const animationDelay = document.getElementById("animation-delay")
  const animationDelayValue = document.getElementById("animation-delay-value")
  const animationIteration = document.getElementById("animation-iteration")
  const animationDirection = document.getElementById("animation-direction")
  const animationFill = document.getElementById("animation-fill")
  const animationType = document.getElementById("animation-type")

  const preview = document.getElementById("animation-preview")
  const cssCode = document.getElementById("animation-css-code")

  const playBtn = document.getElementById("play-animation")
  const pauseBtn = document.getElementById("pause-animation")

  // Update value displays
  animationDuration.addEventListener("input", () => {
    animationDurationValue.textContent = `${animationDuration.value}s`
    updateAnimationPreview()
  })

  animationDelay.addEventListener("input", () => {
    animationDelayValue.textContent = `${animationDelay.value}s`
    updateAnimationPreview()
  })

  // Update animation on input change
  ;[animationName, animationTiming, animationIteration, animationDirection, animationFill, animationType].forEach(
    (input) => {
      input.addEventListener("change", updateAnimationPreview)
    },
  )

  // Play/Pause buttons
  playBtn.addEventListener("click", () => {
    preview.style.animationPlayState = "running"
  })

  pauseBtn.addEventListener("click", () => {
    preview.style.animationPlayState = "paused"
  })

  function updateAnimationPreview() {
    const name = animationName.value
    const duration = animationDuration.value
    const timing = animationTiming.value
    const delay = animationDelay.value
    const iteration = animationIteration.value
    const direction = animationDirection.value
    const fill = animationFill.value
    const type = animationType.value

    // Generate keyframes based on animation type
    let keyframes = ""

    switch (type) {
      case "bounce":
        keyframes = `@keyframes ${name} {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}`
        break

      case "fade":
        keyframes = `@keyframes ${name} {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`
        break

      case "slide":
        keyframes = `@keyframes ${name} {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}`
        break

      case "rotate":
        keyframes = `@keyframes ${name} {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`
        break

      case "pulse":
        keyframes = `@keyframes ${name} {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}`
        break

      case "shake":
        keyframes = `@keyframes ${name} {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}`
        break
    }

    // Generate CSS
    const css = `${keyframes}

.animated-element {
  animation-name: ${name};
  animation-duration: ${duration}s;
  animation-timing-function: ${timing};
  animation-delay: ${delay}s;
  animation-iteration-count: ${iteration};
  animation-direction: ${direction};
  animation-fill-mode: ${fill};
}`

    // Update code
    cssCode.textContent = css

    // Apply animation to preview
    preview.style.animation = `${name} ${duration}s ${timing} ${delay}s ${iteration} ${direction} ${fill}`

    // Reset animation
    preview.style.animation = "none"
    preview.offsetHeight // Trigger reflow
    preview.style.animation = `${name} ${duration}s ${timing} ${delay}s ${iteration} ${direction} ${fill}`
  }

  // Initialize animation
  updateAnimationPreview()
}

// Filter Effects Generator
function initFilterGenerator() {
  const blurInput = document.getElementById("filter-blur")
  const blurValue = document.getElementById("filter-blur-value")
  const brightnessInput = document.getElementById("filter-brightness")
  const brightnessValue = document.getElementById("filter-brightness-value")
  const contrastInput = document.getElementById("filter-contrast")
  const contrastValue = document.getElementById("filter-contrast-value")
  const grayscaleInput = document.getElementById("filter-grayscale")
  const grayscaleValue = document.getElementById("filter-grayscale-value")
  const hueRotateInput = document.getElementById("filter-hue-rotate")
  const hueRotateValue = document.getElementById("filter-hue-rotate-value")
  const invertInput = document.getElementById("filter-invert")
  const invertValue = document.getElementById("filter-invert-value")
  const saturateInput = document.getElementById("filter-saturate")
  const saturateValue = document.getElementById("filter-saturate-value")
  const sepiaInput = document.getElementById("filter-sepia")
  const sepiaValue = document.getElementById("filter-sepia-value")

  const dropShadowCheck = document.getElementById("filter-drop-shadow")
  const dropShadowControls = document.getElementById("drop-shadow-controls")
  const shadowHInput = document.getElementById("filter-shadow-h")
  const shadowHValue = document.getElementById("filter-shadow-h-value")
  const shadowVInput = document.getElementById("filter-shadow-v")
  const shadowVValue = document.getElementById("filter-shadow-v-value")
  const shadowBlurInput = document.getElementById("filter-shadow-blur")
  const shadowBlurValue = document.getElementById("filter-shadow-blur-value")
  const shadowColorInput = document.getElementById("filter-shadow-color")

  const imagePreview = document.getElementById("filter-preview")
  const textPreview = document.getElementById("filter-text-preview")
  const cssCode = document.getElementById("filter-css-code")

  // Toggle drop shadow controls
  dropShadowCheck.addEventListener("change", () => {
    dropShadowControls.style.display = dropShadowCheck.checked ? "block" : "none"
    updateFilterPreview()
  })

  // Update value displays
  blurInput.addEventListener("input", () => {
    blurValue.textContent = `${blurInput.value}px`
    updateFilterPreview()
  })

  brightnessInput.addEventListener("input", () => {
    brightnessValue.textContent = `${brightnessInput.value}%`
    updateFilterPreview()
  })

  contrastInput.addEventListener("input", () => {
    contrastValue.textContent = `${contrastInput.value}%`
    updateFilterPreview()
  })

  grayscaleInput.addEventListener("input", () => {
    grayscaleValue.textContent = `${grayscaleInput.value}%`
    updateFilterPreview()
  })

  hueRotateInput.addEventListener("input", () => {
    hueRotateValue.textContent = `${hueRotateInput.value}deg`
    updateFilterPreview()
  })

  invertInput.addEventListener("input", () => {
    invertValue.textContent = `${invertInput.value}%`
    updateFilterPreview()
  })

  saturateInput.addEventListener("input", () => {
    saturateValue.textContent = `${saturateInput.value}%`
    updateFilterPreview()
  })

  sepiaInput.addEventListener("input", () => {
    sepiaValue.textContent = `${sepiaInput.value}%`
    updateFilterPreview()
  })

  shadowHInput.addEventListener("input", () => {
    shadowHValue.textContent = `${shadowHInput.value}px`
    updateFilterPreview()
  })

  shadowVInput.addEventListener("input", () => {
    shadowVValue.textContent = `${shadowVInput.value}px`
    updateFilterPreview()
  })

  shadowBlurInput.addEventListener("input", () => {
    shadowBlurValue.textContent = `${shadowBlurInput.value}px`
    updateFilterPreview()
  })

  // Update filter on input change
  ;[
    blurInput,
    brightnessInput,
    contrastInput,
    grayscaleInput,
    hueRotateInput,
    invertInput,
    saturateInput,
    sepiaInput,
    shadowHInput,
    shadowVInput,
    shadowBlurInput,
    shadowColorInput,
  ].forEach((input) => {
    input.addEventListener("input", updateFilterPreview)
  })

  function updateFilterPreview() {
    let filterValue = `blur(${blurInput.value}px) brightness(${brightnessInput.value}%) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotateInput.value}deg) invert(${invertInput.value}%) saturate(${saturateInput.value}%) sepia(${sepiaInput.value}%)`

    if (dropShadowCheck.checked) {
      const dropShadowValue = `drop-shadow(${shadowHInput.value}px ${shadowVInput.value}px ${shadowBlurInput.value}px ${shadowColorInput.value})`
      filterValue += ` ${dropShadowValue}`
    }

    // Update preview
    imagePreview.style.filter = filterValue
    textPreview.style.filter = filterValue

    // Generate CSS code
    const css = `.element {\n  filter: ${filterValue};\n}`
    cssCode.textContent = css
  }

  // Initialize filter
  updateFilterPreview()
}

// Transform Generator
function initTransformGenerator() {
  const scaleXInput = document.getElementById("scale-x")
  const scaleXValue = document.getElementById("scale-x-value")
  const scaleYInput = document.getElementById("scale-y")
  const scaleYValue = document.getElementById("scale-y-value")
  const rotateDegInput = document.getElementById("rotate-deg")
  const rotateDegValue = document.getElementById("rotate-deg-value")
  const translateXInput = document.getElementById("translate-x")
  const translateXValue = document.getElementById("translate-x-value")
  const translateYInput = document.getElementById("translate-y")
  const translateYValue = document.getElementById("translate-y-value")
  const skewXInput = document.getElementById("skew-x")
  const skewXValue = document.getElementById("skew-x-value")
  const skewYInput = document.getElementById("skew-y")
  const skewYValue = document.getElementById("skew-y-value")
  const transformOriginSelect = document.getElementById("transform-origin")
  const resetTransformBtn = document.getElementById("reset-transform")

  const preview = document.getElementById("transform-preview")
  const cssCode = document.getElementById("transform-css-code")

  // Update value displays
  scaleXInput.addEventListener("input", () => {
    scaleXValue.textContent = scaleXInput.value
    updateTransformPreview()
  })

  scaleYInput.addEventListener("input", () => {
    scaleYValue.textContent = scaleYInput.value
    updateTransformPreview()
  })

  rotateDegInput.addEventListener("input", () => {
    rotateDegValue.textContent = `${rotateDegInput.value}deg`
    updateTransformPreview()
  })

  translateXInput.addEventListener("input", () => {
    translateXValue.textContent = `${translateXInput.value}px`
    updateTransformPreview()
  })

  translateYInput.addEventListener("input", () => {
    translateYValue.textContent = `${translateYInput.value}px`
    updateTransformPreview()
  })

  skewXInput.addEventListener("input", () => {
    skewXValue.textContent = `${skewXInput.value}deg`
    updateTransformPreview()
  })

  skewYInput.addEventListener("input", () => {
    skewYValue.textContent = `${skewYInput.value}deg`
    updateTransformPreview()
  })

  transformOriginSelect.addEventListener("change", updateTransformPreview)

  // Reset transform
  resetTransformBtn.addEventListener("click", () => {
    scaleXInput.value = 1
    scaleYInput.value = 1
    rotateDegInput.value = 0
    translateXInput.value = 0
    translateYInput.value = 0
    skewXInput.value = 0
    skewYInput.value = 0
    transformOriginSelect.value = "center center"

    scaleXValue.textContent = "1"
    scaleYValue.textContent = "1"
    rotateDegValue.textContent = "0deg"
    translateXValue.textContent = "0px"
    translateYValue.textContent = "0px"
    skewXValue.textContent = "0deg"
    skewYValue.textContent = "0deg"

    updateTransformPreview()
  })

  function updateTransformPreview() {
    const scaleX = scaleXInput.value
    const scaleY = scaleYInput.value
    const rotate = rotateDegInput.value
    const translateX = translateXInput.value
    const translateY = translateYInput.value
    const skewX = skewXInput.value
    const skewY = skewYInput.value
    const origin = transformOriginSelect.value

    // Build transform value
    let transform = ""
    if (scaleX !== "1" || scaleY !== "1") {
      transform += `scale(${scaleX}, ${scaleY}) `
    }
    if (rotate !== "0") {
      transform += `rotate(${rotate}deg) `
    }
    if (translateX !== "0" || translateY !== "0") {
      transform += `translate(${translateX}px, ${translateY}px) `
    }
    if (skewX !== "0" || skewY !== "0") {
      transform += `skew(${skewX}deg, ${skewY}deg) `
    }

    // Update preview
    preview.style.transform = transform.trim()
    preview.style.transformOrigin = origin

    // Generate CSS code
    let css = `.element {\n`
    if (transform.trim()) {
      css += `  transform: ${transform.trim()};\n`
    }
    css += `  transform-origin: ${origin};\n`
    css += `}`

    cssCode.textContent = css
  }

  // Initialize transform
  updateTransformPreview()
}

// Flexbox Generator
function initFlexboxGenerator() {
  const displaySelect = document.getElementById("flex-container-display")
  const directionSelect = document.getElementById("flex-container-direction")
  const wrapSelect = document.getElementById("flex-container-wrap")
  const justifySelect = document.getElementById("flex-container-justify")
  const alignItemsSelect = document.getElementById("flex-container-align-items")
  const alignContentSelect = document.getElementById("flex-container-align-content")

  const itemOrderInput = document.getElementById("flex-item-order")
  const itemGrowInput = document.getElementById("flex-item-grow")
  const itemShrinkInput = document.getElementById("flex-item-shrink")
  const itemBasisInput = document.getElementById("flex-item-basis")
  const itemAlignSelfSelect = document.getElementById("flex-item-align-self")

  const containerPreview = document.getElementById("flex-container-preview")
  const itemPreview = document.getElementById("flex-item-preview")
  const cssCode = document.getElementById("flex-css-code")

  // Update flexbox on input change
  ;[displaySelect, directionSelect, wrapSelect, justifySelect, alignItemsSelect, alignContentSelect].forEach(
    (input) => {
      input.addEventListener("change", updateFlexboxPreview)
    },
  )
  ;[itemOrderInput, itemGrowInput, itemShrinkInput, itemBasisInput, itemAlignSelfSelect].forEach((input) => {
    input.addEventListener("input", updateFlexboxPreview)
  })

  function updateFlexboxPreview() {
    // Update container styles
    containerPreview.style.display = displaySelect.value
    containerPreview.style.flexDirection = directionSelect.value
    containerPreview.style.flexWrap = wrapSelect.value
    containerPreview.style.justifyContent = justifySelect.value
    containerPreview.style.alignItems = alignItemsSelect.value
    containerPreview.style.alignContent = alignContentSelect.value

    // Update item styles
    itemPreview.style.order = itemOrderInput.value
    itemPreview.style.flexGrow = itemGrowInput.value
    itemPreview.style.flexShrink = itemShrinkInput.value
    itemPreview.style.flexBasis = itemBasisInput.value
    itemPreview.style.alignSelf = itemAlignSelfSelect.value

    // Generate CSS code
    let css = `.container {\n`
    css += `  display: ${displaySelect.value};\n`
    css += `  flex-direction: ${directionSelect.value};\n`
    css += `  flex-wrap: ${wrapSelect.value};\n`
    css += `  justify-content: ${justifySelect.value};\n`
    css += `  align-items: ${alignItemsSelect.value};\n`
    css += `  align-content: ${alignContentSelect.value};\n`
    css += `}\n\n`

    css += `.item {\n`
    css += `  order: ${itemOrderInput.value};\n`
    css += `  flex-grow: ${itemGrowInput.value};\n`
    css += `  flex-shrink: ${itemShrinkInput.value};\n`
    css += `  flex-basis: ${itemBasisInput.value};\n`
    css += `  align-self: ${itemAlignSelfSelect.value};\n`
    css += `}`

    cssCode.textContent = css
  }

  // Initialize flexbox preview
  updateFlexboxPreview()
}

// Grid Generator
function initGridGenerator() {
  const displaySelect = document.getElementById("grid-container-display")
  const templateColumnsInput = document.getElementById("grid-container-template-columns")
  const templateRowsInput = document.getElementById("grid-container-template-rows")
  const gapInput = document.getElementById("grid-container-gap")
  const justifyItemsSelect = document.getElementById("grid-container-justify-items")
  const alignItemsSelect = document.getElementById("grid-container-align-items")
  const justifyContentSelect = document.getElementById("grid-container-justify-content")
  const alignContentSelect = document.getElementById("grid-container-align-content")

  const itemColumnStartInput = document.getElementById("grid-item-column-start")
  const itemColumnEndInput = document.getElementById("grid-item-column-end")
  const itemRowStartInput = document.getElementById("grid-item-row-start")
  const itemRowEndInput = document.getElementById("grid-item-row-end")
  const itemJustifySelfSelect = document.getElementById("grid-item-justify-self")
  const itemAlignSelfSelect = document.getElementById("grid-item-align-self")

  const containerPreview = document.getElementById("grid-container-preview")
  const itemPreview = document.getElementById("grid-item-preview")
  const cssCode = document.getElementById("grid-css-code")

  // Update grid on input change
  ;[
    displaySelect,
    templateColumnsInput,
    templateRowsInput,
    gapInput,
    justifyItemsSelect,
    alignItemsSelect,
    justifyContentSelect,
    alignContentSelect,
  ].forEach((input) => {
    input.addEventListener("change", updateGridPreview)
  })
  ;[
    itemColumnStartInput,
    itemColumnEndInput,
    itemRowStartInput,
    itemRowEndInput,
    itemJustifySelfSelect,
    itemAlignSelfSelect,
  ].forEach((input) => {
    input.addEventListener("input", updateGridPreview)
  })

  function updateGridPreview() {
    // Update container styles
    containerPreview.style.display = displaySelect.value
    containerPreview.style.gridTemplateColumns = templateColumnsInput.value
    containerPreview.style.gridTemplateRows = templateRowsInput.value
    containerPreview.style.gap = gapInput.value
    containerPreview.style.justifyItems = justifyItemsSelect.value
    containerPreview.style.alignItems = alignItemsSelect.value
    containerPreview.style.justifyContent = justifyContentSelect.value
    containerPreview.style.alignContent = alignContentSelect.value

    // Update item styles
    itemPreview.style.gridColumnStart = itemColumnStartInput.value
    itemPreview.style.gridColumnEnd = itemColumnEndInput.value
    itemPreview.style.gridRowStart = itemRowStartInput.value
    itemPreview.style.gridRowEnd = itemRowEndInput.value
    itemPreview.style.justifySelf = itemJustifySelfSelect.value
    itemPreview.style.alignSelf = itemAlignSelfSelect.value

    // Generate CSS code
    let css = `.container {\n`
    css += `  display: ${displaySelect.value};\n`
    css += `  grid-template-columns: ${templateColumnsInput.value};\n`
    css += `  grid-template-rows: ${templateRowsInput.value};\n`
    css += `  gap: ${gapInput.value};\n`
    css += `  justify-items: ${justifyItemsSelect.value};\n`
    css += `  align-items: ${alignItemsSelect.value};\n`
    css += `  justify-content: ${justifyContentSelect.value};\n`
    css += `  align-content: ${alignContentSelect.value};\n`
    css += `}\n\n`

    css += `.item {\n`
    css += `  grid-column-start: ${itemColumnStartInput.value};\n`
    css += `  grid-column-end: ${itemColumnEndInput.value};\n`
    css += `  grid-row-start: ${itemRowStartInput.value};\n`
    css += `  grid-row-end: ${itemRowEndInput.value};\n`
    css += `  justify-self: ${itemJustifySelfSelect.value};\n`
    css += `  align-self: ${itemAlignSelfSelect.value};\n`
    css += `}`

    cssCode.textContent = css
  }

  // Initialize grid preview
  updateGridPreview()
}

// Responsive Design Tool
function initResponsiveDesign() {
  const viewportWidthInput = document.getElementById("responsive-viewport-width")
  const viewportWidthValue = document.getElementById("responsive-viewport-width-value")
  const viewportHeightInput = document.getElementById("responsive-viewport-height")
  const viewportHeightValue = document.getElementById("responsive-viewport-height-value")
  const deviceTypeSelect = document.getElementById("responsive-device-type")
  const orientationSelect = document.getElementById("responsive-orientation")
  const addMediaQueryBtn = document.getElementById("add-media-query")
  const mediaQueriesContainer = document.getElementById("responsive-media-queries")

  const previewContainer = document.getElementById("responsive-preview")
  const cssCode = document.getElementById("responsive-css-code")

  // Update viewport size display
  viewportWidthInput.addEventListener("input", () => {
    viewportWidthValue.textContent = `${viewportWidthInput.value}px`
    updateResponsivePreview()
  })

  viewportHeightInput.addEventListener("input", () => {
    viewportHeightValue.textContent = `${viewportHeightInput.value}px`
    updateResponsivePreview()
  })

  // Update preview on input change
  ;[deviceTypeSelect, orientationSelect].forEach((input) => {
    input.addEventListener("change", updateResponsivePreview)
  })

  // Add new media query
  addMediaQueryBtn.addEventListener("click", () => {
    const mediaQueryDiv = document.createElement("div")
    mediaQueryDiv.className = "media-query"

    mediaQueryDiv.innerHTML = `
      <input type="text" class="media-query-text" placeholder="Media Query" value="(min-width: 768px)">
      <textarea class="media-query-css" placeholder="CSS Code">/* Tablet styles */
.container {
  max-width: 720px;
  margin: 0 auto;
}</textarea>
      <button class="remove-media-query"><i class="fas fa-times"></i></button>
    `

    mediaQueriesContainer.appendChild(mediaQueryDiv)

    // Add remove button event listener
    const removeBtn = mediaQueryDiv.querySelector(".remove-media-query")
    removeBtn.addEventListener("click", () => {
      mediaQueriesContainer.removeChild(mediaQueryDiv)
      updateResponsivePreview()
    })

    // Add input event listeners
    const queryInput = mediaQueryDiv.querySelector(".media-query-text")
    const cssInput = mediaQueryDiv.querySelector(".media-query-css")
    ;[queryInput, cssInput].forEach((input) => {
      input.addEventListener("input", updateResponsivePreview)
    })

    updateResponsivePreview()
  })

  // Setup initial media query remove buttons
  const initialRemoveBtns = mediaQueriesContainer.querySelectorAll(".remove-media-query")
  initialRemoveBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const mediaQueryDiv = e.target.closest(".media-query")
      mediaQueriesContainer.removeChild(mediaQueryDiv)
      updateResponsivePreview()
    })
  })

  // Setup initial media query inputs
  const initialQueryInputs = mediaQueriesContainer.querySelectorAll(".media-query-text, .media-query-css")
  initialQueryInputs.forEach((input) => {
    input.addEventListener("input", updateResponsivePreview)
  })

  function updateResponsivePreview() {
    // Update preview container size
    previewContainer.style.width = `${viewportWidthInput.value}px`
    previewContainer.style.height = `${viewportHeightInput.value}px`

    // Generate CSS code
    let css = `/* Base styles */\n`
    css += `.container {\n`
    css += `  width: 100%;\n`
    css += `  padding: 15px;\n`
    css += `  box-sizing: border-box;\n`
    css += `}\n\n`

    // Add media queries
    const mediaQueries = mediaQueriesContainer.querySelectorAll(".media-query")
    mediaQueries.forEach((queryDiv) => {
      const queryText = queryDiv.querySelector(".media-query-text").value
      const queryCss = queryDiv.querySelector(".media-query-css").value

      css += `/* ${deviceTypeSelect.value} - ${orientationSelect.value} */\n`
      css += `@media ${queryText} {\n`
      css += queryCss
        .split("\n")
        .map((line) => `  ${line}`)
        .join("\n")
      css += `\n}\n\n`
    })

    cssCode.textContent = css
  }

  // Initialize responsive preview
  updateResponsivePreview()
}

// SVG Icon Generator
function initSvgGenerator() {
  const widthInput = document.getElementById("svg-width")
  const heightInput = document.getElementById("svg-height")
  const bgColorInput = document.getElementById("svg-bg-color")
  const shapeSelect = document.getElementById("svg-shape")
  const shapeColorInput = document.getElementById("svg-shape-color")
  const shapeSizeInput = document.getElementById("svg-shape-size")
  const shapeXInput = document.getElementById("svg-shape-x")
  const shapeYInput = document.getElementById("svg-shape-y")

  const preview = document.getElementById("svg-preview")
  const htmlCode = document.getElementById("svg-html-code")

  // Update SVG on input change
  ;[
    widthInput,
    heightInput,
    bgColorInput,
    shapeSelect,
    shapeColorInput,
    shapeSizeInput,
    shapeXInput,
    shapeYInput,
  ].forEach((input) => {
    input.addEventListener("input", updateSvgPreview)
  })

  function updateSvgPreview() {
    const width = widthInput.value
    const height = heightInput.value
    const bgColor = bgColorInput.value
    const shape = shapeSelect.value
    const shapeColor = shapeColorInput.value
    const shapeSize = shapeSizeInput.value
    const x = shapeXInput.value
    const y = shapeYInput.value

    // Create SVG element
    let svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">\n`

    // Add background if not white
    if (bgColor !== "#ffffff") {
      svgContent += `  <rect width="100%" height="100%" fill="${bgColor}" />\n`
    }

    // Add shape based on selection
    switch (shape) {
      case "circle":
        svgContent += `  <circle cx="${x}%" cy="${y}%" r="${shapeSize}%" fill="${shapeColor}" />\n`
        break
      case "rect":
        const rectSize = shapeSize / 2
        svgContent += `  <rect x="${x - rectSize}%" y="${y - rectSize}%" width="${shapeSize}%" height="${shapeSize}%" fill="${shapeColor}" />\n`
        break
      case "ellipse":
        svgContent += `  <ellipse cx="${x}%" cy="${y}%" rx="${shapeSize}%" ry="${shapeSize / 2}%" fill="${shapeColor}" />\n`
        break
      case "line":
        svgContent += `  <line x1="${x - shapeSize / 2}%" y1="${y}%" x2="${Number(x) + Number(shapeSize) / 2}%" y2="${y}%" stroke="${shapeColor}" stroke-width="3" />\n`
        break
      case "polygon":
        // Create a triangle
        const size = shapeSize / 2
        const points = `${x},${y - size} ${x - size},${Number(y) + Number(size)} ${Number(x) + Number(size)},${Number(y) + Number(size)}`
        svgContent += `  <polygon points="${points}" fill="${shapeColor}" />\n`
        break
    }

    svgContent += `</svg>`

    // Update preview
    preview.innerHTML = svgContent

    // Update code
    htmlCode.textContent = svgContent
  }

  // Initialize SVG preview
  updateSvgPreview()
}
