import { ColumnCompositionProps, CompositionColumns, CrudBinding, FormProps, RemoveProps } from "./crud";
import { Ref } from "vue";

export type DoValueResolveProps = {
  form: any;
};

export class SetFormDataOptions {
  /**
   * 是否执行valueChange
   */
  valueChange?: boolean;
}

export type DoRefreshProps = {
  goFirstPage?: boolean;
};

/**
 * crudExpose
 */
export type CrudExpose = {
  crudRef: Ref;
  crudBinding: Ref<CrudBinding>;
  /**
   * 获取FsFormWrapper的实例
   */
  getFormWrapperRef: () => any;
  /**
   * 获取FsFormRef
   */
  getFormRef: () => any;
  /**
   * 获取表单数据
   */
  getFormData: () => any;

  /**
   * 获取表单数据
   */
  setFormData: (data: any, options?: SetFormDataOptions) => any;

  /**
   * 获取表单组件实例
   * key: 字段key
   * isAsync: 是否异步获取，传true时，此方法返回promise（当组件是异步组件<extends中的组件>时，第一次获取会为空，所以需要异步等待加载完成后才能获取）
   */
  getFormComponentRef: (key: string, isAsync: boolean) => any;
  /**
   * 执行valueBuilder
   * @param rows 表格数据列表
   */
  doValueBuilder: (rows: any[], columns?: CompositionColumns) => void;
  /**
   * 执行valueResolve
   * @param props { form }
   */
  doValueResolve: (props: DoValueResolveProps, columns?: CompositionColumns) => void;
  /**
   * 刷新列表数据
   */
  doRefresh: (props?: DoRefreshProps) => Promise<void>;
  /**
   * 翻页
   */
  doPageTurn: (no: number) => void;
  /**
   * 查询按钮点击，执行查询
   * @param opts {form, goFirstPage =true,mergeForm=false}
   */
  doSearch: (props: DoSearchProps) => Promise<void>;
  /**
   * 删除行按钮点击
   * @param context = {index / row}
   */
  doRemove: (context: DoRemoveContext, opts?: RemoveProps) => Promise<void>;
  /**
   * 打开编辑对话框
   * @param props = {index / row}
   */
  openEdit: (context: OpenEditContext, formOpts?: OpenDialogProps) => Promise<any>;
  /**
   * 打开添加对话框
   *  @param props = {index?,row?}
   */
  openAdd: (context: OpenEditContext, formOpts?: OpenDialogProps) => Promise<any>;
  /**
   * 打开查看对话框
   *  @param props = {index,row}
   */
  openView: (context: OpenEditContext, formOpts?: OpenDialogProps) => Promise<any>;
  /**
   * 打开对话框
   * @param formOpts = {...formWrapper.open的自定义参数}
   */
  openDialog: (formOpts: OpenDialogProps) => Promise<any>;

  _openDialog: (mode: string, context: OpenEditContext, formOpts?: OpenDialogProps) => Promise<any>;

  /**
   *  获取查询组件ref
   */
  getSearchRef: () => any;
  /**
   * 获取查询表单数据
   * @param context
   */
  getSearchFormData: () => any;
  /**
   * 重新设置查询表单数据
   */
  setSearchFormData: (props: SetSearchFormDataProps) => void;

  /**
   * 获取toolbar组件Ref
   */
  getToolbarRef: () => any;

  /**
   * 获取列设置组件Ref
   */
  getColumnsFilterRef: () => any;

  /**
   * 获取列设置的原始列配置Ref
   * 可以修改列设置的原始配置
   */
  getColumnsFilterOriginalColumnsRef: () => any;

  /**
   * 获取列设置的每列配置Ref
   * 可以修改列设置的每列配置
   */
  getColumnsFilterColumnsRef: () => any;
  /**
   * 获取FsTable的实例
   */
  getTableRef: () => any;

  /**
   * 获取x-table的实例
   */
  getBaseTableRef: () => any;

  /**
   * 获取表格数据
   */
  getTableData: () => any[];
  /**
   * 重新设置表格数据
   */
  setTableData: (data: any[]) => void;
  /**
   * 插入行
   * @param index
   * @param row
   */
  insertTableRow: (index: number, row: Object) => void;
  /**
   * 更新行
   * @param index
   * @param row
   */
  updateTableRow: (index: number, row: Object, merge?: boolean) => void;
  /**
   * 删除行
   * @param index
   */
  removeTableRow: (index: number) => void;

  /**
   * 获取表格数据某一行
   */
  getTableDataRow: (index: number) => any;
  /**
   * 选中某一行
   * @param context = {row}
   */
  doSelectCurrentRow: (context: SelectCurrentRowProps) => void;
  /**
   * 行编辑
   */
  editable: any;
};

/**
 * index or row 必须传一个
 */
export type OpenEditContext = {
  /**
   * 行索引, 行索引或row，必传一个
   */
  index?: number;
  /**
   * 行数据，默认会赋值给initialForm作为初始值
   */
  row?: any;
};

/**
 * crudExpose.openDialog 打开对话框参数
 */
export type OpenDialogProps = {
  /**
   * 是否新创建一个实例打开
   * 当使用新建实例打开时，无法通过getFormWrapperRef获取到表单ref，你可以从openDialog的返回值中拿到ref
   * const {openDialog} = useFormWrapper()
   * const wrapperRef = await openDialog(props:OpenDialogProps)
   */
  newInstance?: boolean;
  /**
   * 对话框id，不传则随机生成，新实例在关闭时不会被销毁，使用相同id的form重复打开会被覆盖
   */
  id?: string;
} & FormProps;

/**
 * crudExpose.setSearchFormData参数
 */
export type SetSearchFormDataProps = { form: any; mergeForm?: boolean; triggerSearch?: boolean };
/**
 * crudExpose.doRemove参数
 */
export type DoRemoveContext = { index?: number; row?: any };
/**
 * crudExpose.doSearch参数
 */
export type DoSearchProps = { form: any; goFirstPage?: boolean; mergeForm?: boolean };
/**
 * crudExpose.doSelectCurrentRow参数
 */
export type SelectCurrentRowProps = { row: any };
