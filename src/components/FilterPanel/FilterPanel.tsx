import { type JSX } from "react";

import "./FilterPanel.css";

function FilterPanel(): JSX.Element {
  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h4 className="body-3">فیلتر ها</h4>
        <button className="caption-3">حذف فیلترها</button>
      </div>

      <div className="filter-group body-4">
        <select className="body-4">
          <option>برند</option>
          <option>برند</option>
          <option>برند</option>
        </select>

        <select className="body-4">
          <option>اندازه</option>
          <option>اندازه</option>
          <option>اندازه</option>
        </select>

        <select className="body-4">
          <option>رنگ</option>
          <option>رنگ</option>
          <option>رنگ</option>
        </select>

        <div className="toggle-group">
          <p>ارسال امروز</p>
          <div className="toggle-switch">
            <div className="toggle-knob"></div>
          </div>
        </div>

        <div className="toggle-group">
          <p>فقط کالاهای موجود</p>
          <div className="toggle-switch">
            <div className="toggle-knob"></div>
          </div>
        </div>

        <select className="body-4">
          <option>محدوده قیمت</option>
          <option>محدوده قیمت</option>
          <option>محدوده قیمت</option>
        </select>

        <select className="body-4">
          <option>مدل</option>
          <option>مدل</option>
          <option>مدل</option>
        </select>

        <select className="body-4" style={{ borderBottom: "none" }}>
          <option>طرح</option>
          <option>طرح</option>
          <option>طرح</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
