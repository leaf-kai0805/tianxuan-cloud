// ===== 模型数据 =====
const modelData = [
    {
        id: 1,
        name: 'Qwen2.5-72B-Instruct',
        version: 'v1.0.0',
        series: 'Qwen',
        type: '文本生成',
        typeTag: 'text',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 3,
        status: 'running',
        statusText: '运行中',
        spec: '20C_64G_1*A100-8(可选4)',
        nodeCount: 1,
        cpu: '20核',
        memory: '64GB',
        gpu: 'A100-8GB',
        createTime: '2026-04-01 10:30:00',
        autoScale: {
            enabled: true,
            min: 1,
            max: 10,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [
                { metric: 'gpu_util', operator: '>', value: 85, duration: 60 },
                { metric: 'queue_length', operator: '>', value: 20, duration: 30 }
            ],
            conditionOperator: 'or',
            notifySuccess: { tenant: 'tenant1', app: 'app1', users: ['user1', 'user2'] },
            notifyFail: { tenant: 'tenant1', app: 'app1', users: ['user1'] }
        }
    },
    {
        id: 2,
        name: 'Qwen2-VL-7B-Instruct',
        version: 'v1.2.0',
        series: 'Qwen',
        type: '多模态',
        typeTag: 'multimodal',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 2,
        status: 'running',
        statusText: '运行中',
        spec: '16C_32G_1*A100-4',
        nodeCount: 1,
        cpu: '16核',
        memory: '32GB',
        gpu: 'A100-4GB',
        createTime: '2026-04-05 14:20:00',
        autoScale: {
            enabled: false,
            min: 1,
            max: 5,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [
                { metric: 'cpu_util', operator: '>', value: 80, duration: 60 }
            ],
            conditionOperator: 'or',
            notifySuccess: null,
            notifyFail: null
        }
    },
    {
        id: 3,
        name: 'minerU-pdf-parser',
        version: 'v0.2.0',
        series: 'minerU',
        type: '文档解析',
        typeTag: 'document',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 5,
        status: 'running',
        statusText: '运行中',
        spec: '8C_16G_0',
        nodeCount: 2,
        cpu: '8核',
        memory: '16GB',
        gpu: '无',
        createTime: '2026-04-08 09:15:00',
        autoScale: {
            enabled: true,
            min: 2,
            max: 20,
            step: 2,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [
                { metric: 'cpu_util', operator: '>', value: 70, duration: 120 }
            ],
            conditionOperator: 'or',
            notifySuccess: { tenant: 'tenant1', app: 'app1', users: [] },
            notifyFail: null
        }
    },
    {
        id: 4,
        name: 'PaddleOCR-v4',
        version: 'v4.0.0',
        series: 'paddleocr',
        type: 'OCR识别',
        typeTag: 'ocr',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 4,
        status: 'running',
        statusText: '运行中',
        spec: '4C_8G_0',
        nodeCount: 1,
        cpu: '4核',
        memory: '8GB',
        gpu: '无',
        createTime: '2026-04-10 16:45:00',
        autoScale: {
            enabled: false,
            min: 1,
            max: 8,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [],
            conditionOperator: 'or',
            notifySuccess: null,
            notifyFail: null
        }
    },
    {
        id: 5,
        name: 'DeepSeek-V3-671B',
        version: 'v1.0.0',
        series: 'DeepSeek',
        type: '文本生成',
        typeTag: 'text',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 8,
        status: 'running',
        statusText: '运行中',
        spec: '32C_128G_4*A100-80',
        nodeCount: 2,
        cpu: '32核',
        memory: '128GB',
        gpu: '4×A100-80GB',
        createTime: '2026-04-12 11:00:00',
        autoScale: {
            enabled: true,
            min: 4,
            max: 16,
            step: 2,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [
                { metric: 'gpu_util', operator: '>', value: 85, duration: 60 },
                { metric: 'gpu_mem', operator: '>', value: 90, duration: 30 },
                { metric: 'latency_p99', operator: '>', value: 5000, duration: 60 }
            ],
            conditionOperator: 'and',
            notifySuccess: { tenant: 'tenant1', app: 'app1', users: [] },
            notifyFail: { tenant: 'tenant1', app: 'app1', users: ['admin'] }
        }
    },
    {
        id: 6,
        name: 'DeepPresenter-9B',
        version: 'v1.0.0',
        series: 'DeepPresenter',
        type: '多模态',
        typeTag: 'multimodal',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 2,
        status: 'stopped',
        statusText: '已停止',
        spec: '12C_48G_1*A100-8',
        nodeCount: 1,
        cpu: '12核',
        memory: '48GB',
        gpu: 'A100-8GB',
        createTime: '2026-04-15 13:30:00',
        autoScale: {
            enabled: false,
            min: 1,
            max: 4,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [],
            conditionOperator: 'or',
            notifySuccess: null,
            notifyFail: null
        }
    },
    {
        id: 7,
        name: 'Qwen2.5-32B-Instruct',
        version: 'v1.1.0',
        series: 'Qwen',
        type: '文本生成',
        typeTag: 'text',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 4,
        status: 'error',
        statusText: '异常',
        spec: '16C_64G_2*A100-4',
        nodeCount: 1,
        cpu: '16核',
        memory: '64GB',
        gpu: '2×A100-4GB',
        createTime: '2026-04-18 10:00:00',
        autoScale: {
            enabled: false,
            min: 1,
            max: 6,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [],
            conditionOperator: 'or',
            notifySuccess: null,
            notifyFail: null
        }
    },
    {
        id: 8,
        name: 'Qwen2-Audio-7B-Instruct',
        version: 'v1.0.0',
        series: 'Qwen',
        type: '多模态',
        typeTag: 'multimodal',
        deployMethod: '在线部署',
        deployTag: 'online',
        instances: 1,
        status: 'running',
        statusText: '运行中',
        spec: '8C_32G_1*A100-4',
        nodeCount: 1,
        cpu: '8核',
        memory: '32GB',
        gpu: 'A100-4GB',
        createTime: '2026-04-20 15:45:00',
        autoScale: {
            enabled: false,
            min: 1,
            max: 3,
            step: 1,
            scaleUpCooldown: 300,
            scaleDownCooldown: 600,
            conditions: [],
            conditionOperator: 'or',
            notifySuccess: null,
            notifyFail: null
        }
    }
];

// ===== 指标定义 =====
const metricDefinitions = {
    'cpu_util': { label: 'CPU利用率', unit: '%', valueType: 'percentage' },
    'gpu_util': { label: 'GPU利用率', unit: '%', valueType: 'percentage' },
    'gpu_mem': { label: 'GPU显存使用率', unit: '%', valueType: 'percentage' },
    'gpu_mem_used': { label: 'GPU显存占用量', unit: 'GB', valueType: 'absolute' },
    'memory_util': { label: '内存使用率', unit: '%', valueType: 'percentage' },
    'latency_p50': { label: '推理延迟P50', unit: 'ms', valueType: 'absolute' },
    'latency_p99': { label: '推理延迟P99', unit: 'ms', valueType: 'absolute' },
    'rps': { label: 'RPS(每秒请求)', unit: '次/秒', valueType: 'absolute' },
    'rpm': { label: 'RPM(每分请求)', unit: '次/分', valueType: 'absolute' },
    'queue_length': { label: '请求队列长度', unit: '个', valueType: 'absolute' },
    'reject_rate': { label: '请求拒绝率', unit: '%', valueType: 'percentage' }
};

// ===== 当前状态 =====
let currentModel = null;
let currentPage = 1;
const pageSize = 10;
let filteredData = [...modelData];

// ===== DOM元素 =====
const tbody = document.getElementById('model-tbody');
const totalPagesSpan = document.getElementById('total-pages');
const currentPageInput = document.getElementById('current-page');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const scaleModal = document.getElementById('scale-modal');
const detailModal = document.getElementById('detail-modal');
const dropdownMenu = document.getElementById('action-dropdown');
const toastContainer = document.getElementById('toast-container');

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    bindEvents();
    initNotificationSelects();
    initSidebar();
});

// ===== 侧边栏交互 =====
function initSidebar() {
    // 一级菜单展开/收起
    document.querySelectorAll('.nav-group-header').forEach(function(header) {
        header.addEventListener('click', function() {
            var group = this.closest('.nav-group');
            group.classList.toggle('expanded');
        });
    });

    // 二级菜单选中
    document.querySelectorAll('.nav-child-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // 清除所有 active
            document.querySelectorAll('.nav-child-item').forEach(function(el) {
                el.classList.remove('active');
            });
            // 设置当前选中
            this.classList.add('active');
        });
    });
}

// ===== 渲染表格 =====
function renderTable() {
    tbody.innerHTML = '';
    
    const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const pageData = filteredData.slice(startIndex, endIndex);
    
    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 48px; color: var(--text-tertiary);">
                    <i class="fa-solid fa-inbox" style="font-size: 32px; margin-bottom: 16px; display: block;"></i>
                    暂无数据
                </td>
            </tr>
        `;
    }
    
    pageData.forEach(model => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="col-name">
                <div class="model-name">
                    <div class="model-icon">
                        <i class="fa-solid fa-cube"></i>
                    </div>
                    <div>
                        <div style="font-weight: 500;">${model.name}</div>
                        <div style="font-size: 11px; color: var(--text-tertiary);">${model.version}</div>
                    </div>
                </div>
            </td>
            <td class="col-series">
                <span class="tag tag-series">${model.series}</span>
            </td>
            <td class="col-type">
                <span class="tag tag-type">${model.type}</span>
            </td>
            <td class="col-deploy">
                <span class="tag tag-deploy">${model.deployMethod}</span>
            </td>
            <td class="col-instances">
                <div class="instances-cell">
                    <span class="instances-count">${model.instances}</span>
                    ${model.autoScale.enabled ? '<span class="instances-badge">自动</span>' : ''}
                </div>
            </td>
            <td class="col-status">
                <span class="tag tag-status ${model.status}">
                    <i class="fa-solid fa-circle" style="font-size: 6px; margin-right: 6px;"></i>
                    ${model.statusText}
                </span>
            </td>
            <td class="col-actions">
                <div class="action-cell">
                    <button class="action-btn primary" onclick="showDetail(${model.id})">详情</button>
                    <button class="action-btn" onclick="showEdit(${model.id})">编辑</button>
                    <div class="action-more">
                        <button class="action-more-btn" onclick="toggleDropdown(event, ${model.id})">
                            更多 <i class="fa-solid fa-chevron-down" style="font-size: 10px;"></i>
                        </button>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    totalPagesSpan.textContent = totalPages;
    currentPageInput.value = currentPage;
    currentPageInput.max = totalPages;
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage >= totalPages;
}

// ===== 绑定事件 =====
function bindEvents() {
    // 分页
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredData.length / pageSize);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    
    currentPageInput.addEventListener('change', function() {
        const page = parseInt(this.value) || 1;
        const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
        currentPage = Math.max(1, Math.min(page, totalPages));
        renderTable();
    });
    
    // 筛选
    document.getElementById('filter-status').addEventListener('change', applyFilters);
    document.getElementById('filter-type').addEventListener('change', applyFilters);
    document.getElementById('filter-deploy').addEventListener('change', applyFilters);
    document.getElementById('search-input').addEventListener('input', debounce(applyFilters, 300));
    
    // 点击空白处关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.action-more')) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // 点击遮罩关闭弹窗
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });
}

// ===== 防抖 =====
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ===== 应用筛选 =====
function applyFilters() {
    const status = document.getElementById('filter-status').value;
    const type = document.getElementById('filter-type').value;
    const deploy = document.getElementById('filter-deploy').value;
    const search = document.getElementById('search-input').value.toLowerCase();
    
    filteredData = modelData.filter(model => {
        if (status && model.status !== status) return false;
        if (type && model.typeTag !== type) return false;
        if (deploy && model.deployTag !== deploy) return false;
        if (search && !model.name.toLowerCase().includes(search)) return false;
        return true;
    });
    
    currentPage = 1;
    renderTable();
}

// ===== 显示详情 =====
function showDetail(id) {
    const model = modelData.find(m => m.id === id);
    if (!model) return;
    
    document.getElementById('detail-name').textContent = model.name;
    document.getElementById('detail-version').textContent = model.version;
    document.getElementById('detail-series').textContent = model.series;
    document.getElementById('detail-type').textContent = model.type;
    document.getElementById('detail-deploy').textContent = model.deployMethod;
    document.getElementById('detail-instances').textContent = model.instances + ' 个';
    document.getElementById('detail-status').innerHTML = `
        <span class="tag tag-status ${model.status}">
            <i class="fa-solid fa-circle" style="font-size: 6px; margin-right: 6px;"></i>
            ${model.statusText}
        </span>
    `;
    document.getElementById('detail-create-time').textContent = model.createTime;
    document.getElementById('detail-cpu').textContent = model.cpu;
    document.getElementById('detail-memory').textContent = model.memory;
    document.getElementById('detail-gpu').textContent = model.gpu;
    
    detailModal.classList.add('show');
}

function closeDetailModal() {
    detailModal.classList.remove('show');
}

// ===== 显示编辑 =====
function showEdit(id) {
    showToast('warning', '编辑功能开发中...');
}

// ===== 下拉菜单 =====
function toggleDropdown(event, id) {
    event.stopPropagation();
    currentModel = modelData.find(m => m.id === id);
    
    const btn = event.target.closest('.action-more-btn');
    const rect = btn.getBoundingClientRect();
    
    dropdownMenu.style.top = rect.bottom + 8 + 'px';
    dropdownMenu.style.left = rect.left + 'px';
    dropdownMenu.classList.toggle('show');
}

function handleAction(action) {
    dropdownMenu.classList.remove('show');
    
    if (!currentModel) return;
    
    switch (action) {
        case 'scale':
            openScaleModal(currentModel);
            break;
        case 'restart':
            showToast('success', `正在重启服务 ${currentModel.name}...`);
            break;
        case 'logs':
            showToast('info', '日志查看功能开发中...');
            break;
        case 'delete':
            if (confirm(`确定要删除服务 ${currentModel.name} 吗？`)) {
                showToast('success', '服务已删除');
            }
            break;
    }
}

// ===== 扩缩容弹窗 =====
function openScaleModal(model) {
    currentModel = model;
    
    document.getElementById('instance-spec').textContent = model.spec;
    document.getElementById('node-count').textContent = model.nodeCount;
    document.getElementById('instance-count').value = model.instances;
    
    // 自动扩缩容配置
    const autoScaleEnabled = model.autoScale.enabled;
    document.getElementById('enable-auto-scale').checked = autoScaleEnabled;
    document.getElementById('min-instances').value = model.autoScale.min;
    document.getElementById('max-instances').value = model.autoScale.max;
    document.getElementById('step-instances').value = model.autoScale.step;
    document.getElementById('scale-up-cooldown').value = model.autoScale.scaleUpCooldown;
    document.getElementById('scale-down-cooldown').value = model.autoScale.scaleDownCooldown;
    document.getElementById('condition-operator').value = model.autoScale.conditionOperator;
    
    // 更新面板显示状态
    const panel = document.getElementById('auto-scale-panel');
    panel.classList.toggle('active', autoScaleEnabled);
    
    // 渲染条件列表
    renderConditionList(model.autoScale.conditions);
    
    // 设置通知配置
    setupNotificationConfig('notify-success-targets', model.autoScale.notifySuccess);
    setupNotificationConfig('notify-fail-targets', model.autoScale.notifyFail);
    
    scaleModal.classList.add('show');
}

function closeScaleModal() {
    scaleModal.classList.remove('show');
    currentModel = null;
}

// ===== 切换自动扩缩容面板 =====
function toggleAutoScalePanel() {
    const enabled = document.getElementById('enable-auto-scale').checked;
    const panel = document.getElementById('auto-scale-panel');
    panel.classList.toggle('active', enabled);
}

// ===== 渲染条件列表 =====
function renderConditionList(conditions) {
    const container = document.getElementById('condition-list');
    container.innerHTML = '';
    
    if (conditions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 16px; color: var(--text-muted); font-size: 12px;">
                暂无触发条件，点击下方按钮添加
            </div>
        `;
        return;
    }
    
    conditions.forEach((cond, index) => {
        const metricDef = metricDefinitions[cond.metric] || { label: cond.metric, unit: '' };
        const item = document.createElement('div');
        item.className = 'condition-item';
        
        item.innerHTML = `
            <select class="config-select" onchange="updateConditionData(${index}, 'metric', this.value)">
                <option value="cpu_util" ${cond.metric === 'cpu_util' ? 'selected' : ''}>CPU利用率</option>
                <option value="gpu_util" ${cond.metric === 'gpu_util' ? 'selected' : ''}>GPU利用率</option>
                <option value="gpu_mem" ${cond.metric === 'gpu_mem' ? 'selected' : ''}>GPU显存使用率</option>
                <option value="gpu_mem_used" ${cond.metric === 'gpu_mem_used' ? 'selected' : ''}>GPU显存占用量</option>
                <option value="memory_util" ${cond.metric === 'memory_util' ? 'selected' : ''}>内存使用率</option>
                <option value="latency_p50" ${cond.metric === 'latency_p50' ? 'selected' : ''}>推理延迟P50</option>
                <option value="latency_p99" ${cond.metric === 'latency_p99' ? 'selected' : ''}>推理延迟P99</option>
                <option value="rps" ${cond.metric === 'rps' ? 'selected' : ''}>RPS</option>
                <option value="rpm" ${cond.metric === 'rpm' ? 'selected' : ''}>RPM</option>
                <option value="queue_length" ${cond.metric === 'queue_length' ? 'selected' : ''}>请求队列长度</option>
                <option value="reject_rate" ${cond.metric === 'reject_rate' ? 'selected' : ''}>请求拒绝率</option>
            </select>
            <select class="config-select" onchange="updateConditionData(${index}, 'operator', this.value)">
                <option value=">" ${cond.operator === '>' ? 'selected' : ''}>&gt; 大于</option>
                <option value="<" ${cond.operator === '<' ? 'selected' : ''}>&lt; 小于</option>
            </select>
            <div class="condition-value">
                <input type="number" class="config-input" value="${cond.value}" 
                       onchange="updateConditionData(${index}, 'value', this.value)"
                       style="width: 100%; text-align: center;">
            </div>
            <span style="color: var(--text-tertiary); font-size: 12px;">${metricDef.unit}</span>
            <span style="color: var(--text-tertiary); font-size: 12px;">持续</span>
            <div class="condition-duration">
                <input type="number" class="config-input" value="${cond.duration}" 
                       onchange="updateConditionData(${index}, 'duration', this.value)"
                       style="width: 100%;">
            </div>
            <span style="color: var(--text-tertiary); font-size: 12px;">秒</span>
            <button class="condition-remove" onclick="removeCondition(${index})" title="删除">
                <i class="fa-solid fa-times"></i>
            </button>
        `;
        
        container.appendChild(item);
    });
}

// ===== 更新条件数据 =====
function updateConditionData(index, field, value) {
    // 数据会通过getCurrentConditions获取
}

// ===== 获取当前条件 =====
function getCurrentConditions() {
    const items = document.querySelectorAll('#condition-list .condition-item');
    const conditions = [];
    
    items.forEach((item) => {
        if (item.querySelector('.config-select')) {
            conditions.push({
                metric: item.querySelectorAll('.config-select')[0].value,
                operator: item.querySelectorAll('.config-select')[1].value,
                value: parseFloat(item.querySelector('.condition-value input').value) || 0,
                duration: parseInt(item.querySelector('.condition-duration input').value) || 60
            });
        }
    });
    
    return conditions;
}

// ===== 添加条件 =====
function addCondition() {
    const conditions = getCurrentConditions();
    conditions.push({
        metric: 'gpu_util',
        operator: '>',
        value: 80,
        duration: 60
    });
    renderConditionList(conditions);
}

// ===== 删除条件 =====
function removeCondition(index) {
    const conditions = getCurrentConditions();
    conditions.splice(index, 1);
    renderConditionList(conditions);
}

// ===== 初始化通知选择器 =====
function initNotificationSelects() {
    document.querySelectorAll('.notify-targets').forEach(container => {
        const selects = container.querySelectorAll('.target-select');
        
        selects.forEach((select) => {
            select.addEventListener('change', function() {
                const level = this.dataset.level;
                const value = this.value;
                
                if (level === 'tenant') {
                    const appSelect = container.querySelector('[data-level="app"]');
                    const userSelect = container.querySelector('[data-level="user"]');
                    
                    if (value) {
                        appSelect.disabled = false;
                        appSelect.innerHTML = `
                            <option value="">选择应用</option>
                            <option value="app1">应用A</option>
                            <option value="app2">应用B</option>
                            <option value="app3">应用C</option>
                        `;
                        userSelect.disabled = true;
                        userSelect.innerHTML = '<option value="">先选应用</option>';
                    } else {
                        appSelect.disabled = true;
                        appSelect.innerHTML = '<option value="">先选租户</option>';
                        userSelect.disabled = true;
                        userSelect.innerHTML = '<option value="">先选应用</option>';
                    }
                }
                
                if (level === 'app') {
                    const userSelect = container.querySelector('[data-level="user"]');
                    
                    if (value) {
                        userSelect.disabled = false;
                        userSelect.innerHTML = `
                            <option value="">选择接收人</option>
                            <option value="user1">张三</option>
                            <option value="user2">李四</option>
                            <option value="user3">王五</option>
                            <option value="role:admin">管理员角色</option>
                            <option value="role:ops">运维角色</option>
                        `;
                    } else {
                        userSelect.disabled = true;
                        userSelect.innerHTML = '<option value="">先选应用</option>';
                    }
                }
            });
        });
    });
}

// ===== 设置通知配置 =====
function setupNotificationConfig(containerId, config) {
    const container = document.getElementById(containerId);
    const tenantSelect = container.querySelector('[data-level="tenant"]');
    const appSelect = container.querySelector('[data-level="app"]');
    const userSelect = container.querySelector('[data-level="user"]');
    
    if (!config) {
        tenantSelect.value = '';
        appSelect.disabled = true;
        appSelect.innerHTML = '<option value="">先选租户</option>';
        userSelect.disabled = true;
        userSelect.innerHTML = '<option value="">先选应用</option>';
        return;
    }
    
    tenantSelect.value = config.tenant || '';
    
    if (config.tenant) {
        appSelect.disabled = false;
        appSelect.innerHTML = `
            <option value="">选择应用</option>
            <option value="app1" ${config.app === 'app1' ? 'selected' : ''}>应用A</option>
            <option value="app2" ${config.app === 'app2' ? 'selected' : ''}>应用B</option>
            <option value="app3" ${config.app === 'app3' ? 'selected' : ''}>应用C</option>
        `;
        
        if (config.app) {
            userSelect.disabled = false;
            userSelect.innerHTML = `
                <option value="">选择接收人</option>
                <option value="user1" ${config.users?.includes('user1') ? 'selected' : ''}>张三</option>
                <option value="user2" ${config.users?.includes('user2') ? 'selected' : ''}>李四</option>
                <option value="user3" ${config.users?.includes('user3') ? 'selected' : ''}>王五</option>
            `;
        }
    }
}

// ===== 手动调整实例数 =====
function decreaseInstances() {
    const input = document.getElementById('instance-count');
    const value = parseInt(input.value) || 1;
    if (value > 1) {
        input.value = value - 1;
    }
}

function increaseInstances() {
    const input = document.getElementById('instance-count');
    const value = parseInt(input.value) || 0;
    input.value = value + 1;
}

// ===== 确认扩缩容 =====
function confirmScale() {
    if (!currentModel) return;
    
    const instanceCount = parseInt(document.getElementById('instance-count').value);
    const autoScaleEnabled = document.getElementById('enable-auto-scale').checked;
    const minInstances = parseInt(document.getElementById('min-instances').value);
    const maxInstances = parseInt(document.getElementById('max-instances').value);
    
    // 验证
    if (minInstances >= maxInstances) {
        showToast('error', '最小实例数必须小于最大实例数');
        return;
    }
    
    // 获取条件
    const conditions = getCurrentConditions();
    
    // 获取通知配置
    const notifySuccessConfig = document.getElementById('notify-scale-success').checked ? {
        tenant: document.querySelector('#notify-success-targets [data-level="tenant"]').value,
        app: document.querySelector('#notify-success-targets [data-level="app"]').value,
        users: Array.from(document.querySelectorAll('#notify-success-targets [data-level="user"] option:checked'))
            .map(opt => opt.value)
    } : null;
    
    const notifyFailConfig = document.getElementById('notify-scale-fail').checked ? {
        tenant: document.querySelector('#notify-fail-targets [data-level="tenant"]').value,
        app: document.querySelector('#notify-fail-targets [data-level="app"]').value,
        users: Array.from(document.querySelectorAll('#notify-fail-targets [data-level="user"] option:checked'))
            .map(opt => opt.value)
    } : null;
    
    // 更新数据
    currentModel.instances = instanceCount;
    currentModel.autoScale = {
        enabled: autoScaleEnabled,
        min: minInstances,
        max: maxInstances,
        step: parseInt(document.getElementById('step-instances').value),
        scaleUpCooldown: parseInt(document.getElementById('scale-up-cooldown').value),
        scaleDownCooldown: parseInt(document.getElementById('scale-down-cooldown').value),
        conditions: conditions,
        conditionOperator: document.getElementById('condition-operator').value,
        notifySuccess: notifySuccessConfig,
        notifyFail: notifyFailConfig
    };
    
    // 更新表格
    renderTable();
    
    closeScaleModal();
    showToast('success', `服务 ${currentModel.name} 扩缩容配置已更新`);
}

// ===== Toast提示 =====
function showToast(type, message) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle',
        info: 'fa-circle-info'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${icons[type]}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
